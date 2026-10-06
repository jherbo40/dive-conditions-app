import type { DiveSite } from '../data/diveSites';

export type DiveOverall = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Unsafe';

export interface MarineReading {
  waveHeight: number;
  wavePeriod: number;
  windSpeed: number;
  waterTemp: number;
  visibilityKm: number;
}

export interface TideReading {
  heightFt: number;
  state: 'Slack' | 'Flood' | 'Ebb';
}

export interface DiveConditionSummary {
  score: number;
  overall: DiveOverall;
  visibility: number;
  surf: number;
  waterTemp: number;
  tide: number;
  note: string;
}

export interface SiteConditionSnapshot {
  site: DiveSite;
  marine: MarineReading;
  tide: TideReading;
  conditions: DiveConditionSummary;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const labelForScore = (score: number): DiveOverall => {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 55) return 'Fair';
  if (score >= 35) return 'Poor';
  return 'Unsafe';
};

const formatDate = (date: Date) => date.toISOString().slice(0, 10).replace(/-/g, '');

export const fallbackMarineReading = (site: DiveSite): MarineReading => {
  const waveHeight = Number((site.defaultWaveHeight + (site.lat % 2) * 0.5).toFixed(1));
  const wavePeriod = 9 + (site.defaultWaveHeight * 2.3);
  const windSpeed = site.defaultWindSpeed + (site.lon % 5) * 0.5;
  const waterTemp = site.preferredWaterTemp + Math.sin(site.lat / 10) * 2.8;
  const visibilityKm = clamp(18 - waveHeight * 2.2 - windSpeed * 0.5, 3, 18);

  return {
    waveHeight,
    wavePeriod: Number(wavePeriod.toFixed(0)),
    windSpeed: Number(windSpeed.toFixed(1)),
    waterTemp: Number(waterTemp.toFixed(1)),
    visibilityKm: Number(visibilityKm.toFixed(1)),
  };
};

export const deriveTideState = (height: number): TideReading => {
  const normalizedHeight = Math.max(0, height);
  const roundedHeight = Number(normalizedHeight.toFixed(2));

  const state =
    roundedHeight < 1.2 ? 'Slack' : roundedHeight < 3.2 ? 'Flood' : 'Ebb';

  return {
    heightFt: roundedHeight,
    state,
  };
};

const calculateDiveSummary = (
  site: DiveSite,
  marine: MarineReading,
  tide: TideReading,
): DiveConditionSummary => {
  const surfScore = clamp(100 - marine.waveHeight * 24 - marine.windSpeed * 1.5, 0, 100);
  const visibilityScore = clamp(
    100 - marine.waveHeight * 8 - marine.windSpeed * 1.4 + marine.visibilityKm * 4,
    0,
    100,
  );
  const waterTempScore = clamp(
    100 - Math.abs(marine.waterTemp - site.preferredWaterTemp) * 6,
    0,
    100,
  );

  const tideMap = {
    Slack: 92,
    Flood: 80,
    Ebb: 76,
  };

  let tideScore = tideMap[tide.state];
  if (site.tidePreference === 'slack' && tide.state !== 'Slack') {
    tideScore -= 18;
  }

  if (site.tidePreference === 'moving' && tide.state === 'Slack') {
    tideScore -= 10;
  }

  tideScore = clamp(tideScore, 0, 100);

  const score = Math.round(
    surfScore * 0.35 +
      visibilityScore * 0.25 +
      waterTempScore * 0.2 +
      tideScore * 0.2,
  );

  const overall = labelForScore(score);

  const note = `${site.name} is ${overall.toLowerCase()} today for divers. Expect ${marine.waveHeight.toFixed(1)} ft swell, ${marine.windSpeed.toFixed(0)} kt winds, ${marine.waterTemp.toFixed(0)}°F water, and a ${tide.state.toLowerCase()} tide window.`;

  return {
    score,
    overall,
    visibility: Math.round(visibilityScore),
    surf: Math.round(surfScore),
    waterTemp: Math.round(waterTempScore),
    tide: Math.round(tideScore),
    note,
  };
};

export const fetchSiteConditions = async (site: DiveSite): Promise<SiteConditionSnapshot> => {
  const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${site.lat}&longitude=${site.lon}&hourly=wave_height,wave_period,wind_speed_10m,sea_surface_temperature&timezone=auto&forecast_days=1`;

  const nextDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const tideUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=web_services&begin_date=${formatDate(new Date())}&end_date=${formatDate(nextDay)}&station=${site.tideStationId}&datum=MLLW&time_zone=gmt&units=metric&format=json`;

  const fallbackMarine = fallbackMarineReading(site);

  try {
    const [marineResponse, tideResponse] = await Promise.all([
      fetch(marineUrl),
      fetch(tideUrl),
    ]);

    let marine: MarineReading = fallbackMarine;
    let tide: TideReading = deriveTideState(1.8);

    if (marineResponse.ok) {
      const marinePayload = (await marineResponse.json()) as any;
      const hourly = marinePayload?.hourly || {};
      const times = hourly.time || [];
      const index = Math.max(0, times.length - 1);

      const rawWave = Number(hourly.wave_height?.[index] ?? fallbackMarine.waveHeight);
      const rawPeriod = Number(hourly.wave_period?.[index] ?? fallbackMarine.wavePeriod);
      const rawWindMps = Number(hourly.wind_speed_10m?.[index] ?? fallbackMarine.windSpeed / 1.94384);
      const rawWaterTempC = Number(hourly.sea_surface_temperature?.[index] ?? (fallbackMarine.waterTemp - 32) * 5 / 9);

      marine = {
        waveHeight: Number(rawWave.toFixed(1)),
        wavePeriod: Number(rawPeriod.toFixed(0)),
        windSpeed: Number((rawWindMps * 1.94384).toFixed(1)),
        waterTemp: Number(((rawWaterTempC * 9) / 5 + 32).toFixed(1)),
        visibilityKm: clamp(18 - rawWave * 2.3 - rawWindMps * 2.2, 3, 18),
      };
    }

    if (tideResponse.ok) {
      const tidePayload = (await tideResponse.json()) as any;
      const predictions = Array.isArray(tidePayload?.predictions) ? tidePayload.predictions : [];

      if (predictions.length > 0) {
        const now = Date.now();
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        predictions.forEach((entry: any, index: number) => {
          const value = Number(entry.v);
          if (!Number.isFinite(value)) return;
          const candidateTime = new Date(entry.t).getTime();
          const distance = Math.abs(candidateTime - now);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        const nearestValue = Number(predictions[nearestIndex]?.v ?? 0);
        const previousValue = Number(predictions[Math.max(0, nearestIndex - 1)]?.v ?? nearestValue);
        const nextValue = Number(predictions[Math.min(predictions.length - 1, nearestIndex + 1)]?.v ?? nearestValue);
        const heightFt = Number((nearestValue * 3.28084).toFixed(2));

        const state = Math.abs(nextValue - previousValue) < 0.16 ? 'Slack' : nextValue >= previousValue ? 'Flood' : 'Ebb';

        tide = {
          heightFt,
          state,
        };
      }
    }

    const conditions = calculateDiveSummary(site, marine, tide);
    return {
      site,
      marine,
      tide,
      conditions,
    };
  } catch {
    const marine = fallbackMarine;
    const tide = deriveTideState(1.9);
    const conditions = calculateDiveSummary(site, marine, tide);

    return {
      site,
      marine,
      tide,
      conditions,
    };
  }
};

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { diveSites, type DiveSite } from './data/diveSites';
import { fetchSiteConditions, type SiteConditionSnapshot } from './lib/conditions';
import 'leaflet/dist/leaflet.css';

const defaultCenter: [number, number] = [33.4, -118.3];

const conditionColors: Record<string, string> = {
  Excellent: '#10b981',
  Good: '#22c55e',
  Fair: '#f59e0b',
  Poor: '#f97316',
  Unsafe: '#ef4444',
};

const rarityColors: Record<string, string> = {
  Common: '#22c55e',
  Uncommon: '#38bdf8',
  Rare: '#a78bfa',
  Epic: '#f59e0b',
  Legendary: '#f43f5e',
};

const getConditionColor = (score: number) => {
  if (score >= 85) return '#10b981';
  if (score >= 70) return '#22c55e';
  if (score >= 55) return '#f59e0b';
  if (score >= 35) return '#f97316';
  return '#ef4444';
};

const createMarkerIcon = (color: string) =>
  L.divIcon({
    className: 'custom-div-icon',
    html: `<span style="background:${color};"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

const ConditionPill = ({ label }: { label: string }) => (
  <span className="condition-pill" style={{ backgroundColor: conditionColors[label] || '#64748b' }}>
    {label}
  </span>
);

const RarityBadge = ({ rarity }: { rarity: string }) => (
  <span
    className="rarity-badge"
    style={{ backgroundColor: rarityColors[rarity] || '#64748b' }}
  >
    {rarity}
  </span>
);

const InfoTabs = ({ site }: { site: DiveSite }) => {
  const [activeTab, setActiveTab] = useState<'environment' | 'species'>('environment');

  return (
    <div className="detail-tabs">
      <div className="detail-tab-header">
        <button
          type="button"
          className={activeTab === 'environment' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('environment')}
        >
          Environment
        </button>
        <button
          type="button"
          className={activeTab === 'species' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('species')}
        >
          Species
        </button>
      </div>

      {activeTab === 'environment' ? (
        <div className="detail-content">
          <div className="detail-row"><strong>Depth:</strong> {site.depth}</div>
          <div className="detail-row"><strong>Difficulty:</strong> {site.difficulty}</div>
          <div className="detail-row"><strong>Region:</strong> {site.region}</div>
          <div className="env-list-wrap">
            {site.environment.map((env) => (
              <span key={env} className="env-chip">{env}</span>
            ))}
          </div>
        </div>
      ) : (
        <div className="species-grid">
          {site.species.map((species) => (
            <div key={species.id} className="species-card">
              <RarityBadge rarity={species.rarity} />
              <img src={species.imageUrl} alt={species.name} className="species-image" />
              <div className="species-name">{species.name}</div>
              <div className="species-description">{species.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const App = () => {
  const [siteData, setSiteData] = useState<Record<string, SiteConditionSnapshot>>({});
  const [loading, setLoading] = useState(true);
  const [selectedSiteId, setSelectedSiteId] = useState(diveSites[0]?.id ?? '');

  useEffect(() => {
    let active = true;

    const loadConditions = async () => {
      const results = await Promise.all(
        diveSites.map(async (site) => ({
          site,
          snapshot: await fetchSiteConditions(site),
        })),
      );

      if (!active) return;

      const nextData = Object.fromEntries(
        results.map(({ site, snapshot }) => [site.id, snapshot]),
      );

      setSiteData(nextData);
      setLoading(false);
    };

    loadConditions();

    return () => {
      active = false;
    };
  }, []);

  const selectedSite = useMemo(
    () => diveSites.find((site) => site.id === selectedSiteId) ?? diveSites[0],
    [selectedSiteId],
  );

  const featuredSite = useMemo(() => {
    const values = Object.values(siteData);
    if (!values.length) return null;
    return values.sort((a, b) => b.conditions.score - a.conditions.score)[0];
  }, [siteData]);

  const selectedSnapshot = siteData[selectedSite?.id ?? ''];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Southern California diving</p>
          <h1>Dive Conditions Dashboard</h1>
        </div>
        <div className="status-box">
          <span className="live-dot" />
          {loading ? 'Loading live marine data' : 'Data refreshed'}
        </div>
      </header>

      <main>
        <section className="hero-card">
          <div>
            <p className="section-kicker">Best window today</p>
            {featuredSite ? (
              <>
                <h2>{featuredSite.site.name}</h2>
                <ConditionPill label={featuredSite.conditions.overall} />
                <p className="summary-copy">{featuredSite.conditions.note}</p>
              </>
            ) : (
              <p className="summary-copy">Fetching the latest conditions for SoCal dive sites.</p>
            )}
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <span>Visibility</span>
              <strong>{featuredSite ? `${featuredSite.conditions.visibility}%` : '--'}</strong>
            </div>
            <div className="metric-card">
              <span>Surf</span>
              <strong>{featuredSite ? `${featuredSite.conditions.surf}%` : '--'}</strong>
            </div>
            <div className="metric-card">
              <span>Water Temp</span>
              <strong>{featuredSite ? `${featuredSite.marine.waterTemp.toFixed(0)}°F` : '--'}</strong>
            </div>
            <div className="metric-card">
              <span>Tide</span>
              <strong>{featuredSite ? featuredSite.tide.state : '--'}</strong>
            </div>
          </div>
        </section>

        <section className="map-card">
          <div className="section-header">
            <h3>Popular dive locations</h3>
          </div>
          <MapContainer
            center={defaultCenter}
            zoom={7}
            scrollWheelZoom
            style={{ height: '520px', width: '100%', borderRadius: '18px' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {diveSites.map((site) => {
              const snapshot = siteData[site.id];
              const conditionLabel = snapshot?.conditions.overall ?? 'Fair';
              const conditionColor = snapshot
                ? getConditionColor(snapshot.conditions.score)
                : '#64748b';

              return (
                <Marker
                  key={site.id}
                  position={[site.lat, site.lon]}
                  icon={createMarkerIcon(conditionColor)}
                  eventHandlers={{
                    click: () => setSelectedSiteId(site.id),
                  }}
                >
                  <Popup>
                    <div className="popup-card">
                      <strong>{site.name}</strong>
                      <div>{site.region}</div>
                      <div className="popup-meta">{site.depth}</div>
                      <ConditionPill label={conditionLabel} />
                      <div className="popup-meta">
                        {snapshot ? `${snapshot.marine.waveHeight.toFixed(1)} ft swell` : 'Checking conditions'}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </section>

        <section className="site-grid">
          {diveSites.map((site) => {
            const snapshot = siteData[site.id];
            const conditions = snapshot?.conditions;

            return (
              <article
                key={site.id}
                className={selectedSite?.id === site.id ? 'site-card selected' : 'site-card'}
                onClick={() => setSelectedSiteId(site.id)}
              >
                <div className="site-card-header">
                  <div>
                    <h4>{site.name}</h4>
                    <span>{site.region}</span>
                  </div>
                  {conditions ? <ConditionPill label={conditions.overall} /> : <ConditionPill label="Fair" />}
                </div>

                <p>{site.description}</p>

                <ul className="site-details">
                  <li><strong>Depth:</strong> {site.depth}</li>
                  <li><strong>Difficulty:</strong> {site.difficulty}</li>
                  <li><strong>Water:</strong> {snapshot ? `${snapshot.marine.waterTemp.toFixed(0)}°F` : '--'}</li>
                  <li><strong>Tide:</strong> {snapshot ? snapshot.tide.state : '--'}</li>
                </ul>

                <div className="score-bar-wrap">
                  <div
                    className="score-bar"
                    style={{
                      width: `${conditions ? conditions.score : 50}%`,
                      background: conditions ? getConditionColor(conditions.score) : '#64748b',
                    }}
                  />
                </div>

                <div className="score-row">
                  <span>Score</span>
                  <strong>{conditions ? conditions.score : '--'}/100</strong>
                </div>
              </article>
            );
          })}
        </section>

        {selectedSite && (
          <aside className="detail-panel">
            <div className="detail-panel-header">
              <div>
                <p className="section-kicker">Dive site detail</p>
                <h3>{selectedSite.name}</h3>
              </div>
              {selectedSnapshot ? (
                <ConditionPill label={selectedSnapshot.conditions.overall} />
              ) : (
                <ConditionPill label="Fair" />
              )}
            </div>

            <div className="detail-panel-body">
              <div className="detail-metrics">
                <div className="detail-metric">
                  <label>Visibility</label>
                  <strong>{selectedSnapshot ? `${selectedSnapshot.conditions.visibility}%` : '--'}</strong>
                </div>
                <div className="detail-metric">
                  <label>Surf</label>
                  <strong>{selectedSnapshot ? `${selectedSnapshot.conditions.surf}%` : '--'}</strong>
                </div>
                <div className="detail-metric">
                  <label>Water</label>
                  <strong>{selectedSnapshot ? `${selectedSnapshot.marine.waterTemp.toFixed(0)}°F` : '--'}</strong>
                </div>
                <div className="detail-metric">
                  <label>Tide</label>
                  <strong>{selectedSnapshot ? selectedSnapshot.tide.state : '--'}</strong>
                </div>
              </div>

              <p className="detail-description">{selectedSite.description}</p>
              <InfoTabs site={selectedSite} />
            </div>
          </aside>
        )}
      </main>
    </div>
  );
};

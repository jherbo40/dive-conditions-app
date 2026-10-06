# Dive Conditions App

A live Southern California dive conditions dashboard for boat and shore divers. It blends public marine and tide data with a site-aware scoring algorithm to estimate visibility, surf, water temperature, and tide suitability for popular dive locations.

## Features
- Interactive map of popular Southern California dive sites
- Live marine and tide integration using public APIs
- Dive condition scoring model for visibility, surf, water temperature, and tide
- Region filters and dive site details
- Responsive UI for desktop and mobile

## Public data sources used
- Open-Meteo marine API for wave height, wave period, wind, and sea surface temperature
- NOAA Tides & Currents API for tide predictions
- OpenStreetMap tiles for the map base layer

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Notes
The app includes fallback sample data in case a live API request fails so the dashboard remains usable offline or during temporary API outages.

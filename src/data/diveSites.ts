export type TidePreference = 'slack' | 'moving' | 'either';
export type EnvironmentType =
  | 'Rocky Reef'
  | 'Kelp Forest'
  | 'Sand Flat'
  | 'Artificial Reef'
  | 'Mixed Bottom'
  | 'Wreck'
  | 'Cove'
  | 'Pier Pilings';

export type SpeciesRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface Species {
  id: string;
  name: string;
  rarity: SpeciesRarity;
  imageUrl: string;
  description: string;
}

export interface DiveSite {
  id: string;
  name: string;
  region: string;
  lat: number;
  lon: number;
  depth: string;
  description: string;
  difficulty: string;
  tideStationId: string;
  preferredWaterTemp: number;
  tidePreference: TidePreference;
  defaultWaveHeight: number;
  defaultWindSpeed: number;
  environment: EnvironmentType[];
  species: Species[];
}

export const diveSites: DiveSite[] = [
  {
    id: 'la-jolla-cove',
    name: 'La Jolla Cove',
    region: 'San Diego',
    lat: 32.8493,
    lon: -117.2754,
    depth: '15-40 ft',
    description: 'Protected cove with crystal-clear water and easy entry.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.2,
    defaultWindSpeed: 8,
    environment: ['Rocky Reef', 'Cove', 'Kelp Forest'],
    species: [
      {
        id: 'garibaldi',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Bright orange damselfish and California state fish.'
      },
      {
        id: 'kelp-bass',
        name: 'Kelp Bass',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Aggressive predator that patrols kelp edges.'
      }
    ]
  },
  {
    id: 'point-loma',
    name: 'Point Loma',
    region: 'San Diego',
    lat: 32.6887,
    lon: -117.2428,
    depth: '20-70 ft',
    description: 'Strong surge and kelp beds with excellent marine life.',
    difficulty: 'Intermediate',
    tideStationId: '9410230',
    preferredWaterTemp: 62,
    tidePreference: 'moving',
    defaultWaveHeight: 1.8,
    defaultWindSpeed: 10,
    environment: ['Kelp Forest', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'california-sheephead',
        name: 'California Sheephead',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Semicossyphus_pulcher.jpg/320px-Semicossyphus_pulcher.jpg',
        description: 'Large wrasse with a striking white chest.'
      },
      {
        id: 'harbor-seal',
        name: 'Harbor Seal',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Phoca_vitulina_3.jpg/320px-Phoca_vitulina_3.jpg',
        description: 'Curious marine mammal often seen near kelp.'
      }
    ]
  },
  {
    id: 'shelter-island',
    name: 'Shelter Island',
    region: 'San Diego',
    lat: 32.714,
    lon: -117.2295,
    depth: '12-30 ft',
    description: 'Harbor-side dive with easy access, sandy bottom, and pilings.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.4,
    defaultWindSpeed: 9,
    environment: ['Sand Flat', 'Pier Pilings', 'Artificial Reef'],
    species: [
      {
        id: 'bat-ray',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Graceful ray gliding over the sandy bottom.'
      },
      {
        id: 'leopard-shark',
        name: 'Leopard Shark',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Triakis_semifasciatus.jpg/320px-Triakis_semifasciatus.jpg',
        description: 'Harmless coastal shark with spotted patterning.'
      }
    ]
  },
  {
    id: 'la-jolla-kelp',
    name: 'La Jolla Kelp Forest',
    region: 'San Diego',
    lat: 32.8399,
    lon: -117.287,
    depth: '25-60 ft',
    description: 'Dense kelp forest with rich species diversity and moderate surge.',
    difficulty: 'Intermediate',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'moving',
    defaultWaveHeight: 2.1,
    defaultWindSpeed: 11,
    environment: ['Kelp Forest', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'sunflower-sea-star',
        name: 'Sunflower Sea Star',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pycnopodia_helianthoides.jpg/320px-Pycnopodia_helianthoides.jpg',
        description: 'Massive sea star with many arms and dramatic coloration.'
      },
      {
        id: 'sea-otter',
        name: 'Sea Otter',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sea_otter_cropped.jpg/320px-Sea_otter_cropped.jpg',
        description: 'Playful marine mammal often floating among kelp beds.'
      }
    ]
  },
  {
    id: 'catalina-island',
    name: 'Catalina Island',
    region: 'Channel Islands',
    lat: 33.3436,
    lon: -118.3287,
    depth: '20-80 ft',
    description: 'Classic island diving with clear water and productive reefs.',
    difficulty: 'Intermediate',
    tideStationId: '9414290',
    preferredWaterTemp: 61,
    tidePreference: 'moving',
    defaultWaveHeight: 2.6,
    defaultWindSpeed: 13,
    environment: ['Kelp Forest', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'spiny-lobster',
        name: 'California Spiny Lobster',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panulirus_interruptus.jpg/320px-Panulirus_interruptus.jpg',
        description: 'Night-active scavenger with long antennae.'
      },
      {
        id: 'giant-sea-bass',
        name: 'Giant Sea Bass',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stereolepis_gigas.jpg/320px-Stereolepis_gigas.jpg',
        description: 'Huge grouper that rarely appears at depth.'
      }
    ]
  },
  {
    id: 'laguna-beach',
    name: 'Laguna Beach',
    region: 'Orange County',
    lat: 33.5429,
    lon: -117.7944,
    depth: '15-50 ft',
    description: 'Reef edges and kelp beds with moderate ocean conditions.',
    difficulty: 'Intermediate',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 2.0,
    defaultWindSpeed: 10,
    environment: ['Rocky Reef', 'Kelp Forest', 'Cove'],
    species: [
      {
        id: 'horn-shark',
        name: 'Horn Shark',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Heterodontus_francisci.jpg/320px-Heterodontus_francisci.jpg',
        description: 'Small bottom shark that rests among rocks.'
      },
      {
        id: 'senorita',
        name: 'Señorita',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Oxyjulis_californica.jpg/320px-Oxyjulis_californica.jpg',
        description: 'Small wrasse often seen in schools over rocky reefs.'
      }
    ]
  },
  {
    id: 'dana-point',
    name: 'Dana Point',
    region: 'Orange County',
    lat: 33.461,
    lon: -117.6992,
    depth: '20-50 ft',
    description: 'Popular coastal dive with seasonal visibility swings.',
    difficulty: 'Intermediate',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 2.2,
    defaultWindSpeed: 12,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'ocean-sunfish',
        name: 'Ocean Sunfish',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mola_mola.jpg/320px-Mola_mola.jpg',
        description: 'Large, unusual fish occasionally seen offshore.'
      },
      {
        id: 'kelp-bass-dana',
        name: 'Kelp Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Common predator among the rocky ledges.'
      }
    ]
  },
  {
    id: 'carlsbad-pier',
    name: 'Carlsbad Pier',
    region: 'North County San Diego',
    lat: 33.1607,
    lon: -117.3507,
    depth: '15-35 ft',
    description: 'Shore dive with approachable conditions and easy access.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.5,
    defaultWindSpeed: 9,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'kelp-greenling',
        name: 'Kelp Greenling',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hexagrammos_decagrammus.jpg/320px-Hexagrammos_decagrammus.jpg',
        description: 'Mottled fish often hiding among structure.'
      },
      {
        id: 'surf-perch',
        name: 'Surf Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Micrometrus_minimus.jpg/320px-Micrometrus_minimus.jpg',
        description: 'Small schooling fish common in shallow water.'
      }
    ]
  },
  {
    id: 'leo-carrillo',
    name: 'Leo Carrillo',
    region: 'Los Angeles County',
    lat: 34.043,
    lon: -118.918,
    depth: '20-55 ft',
    description: 'Classic shore dive with drift windows and richer marine life.',
    difficulty: 'Intermediate',
    tideStationId: '9410840',
    preferredWaterTemp: 60,
    tidePreference: 'moving',
    defaultWaveHeight: 2.7,
    defaultWindSpeed: 14,
    environment: ['Rocky Reef', 'Sand Flat', 'Mixed Bottom'],
    species: [
      {
        id: 'lingcod',
        name: 'Lingcod',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ophiodon_elongatus.jpg/320px-Ophiodon_elongatus.jpg',
        description: 'Large bottom fish with a broad head and mottled pattern.'
      },
      {
        id: 'bat-ray-leo',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Rays often cruise the sand channels between reefs.'
      }
    ]
  },
  {
    id: 'ventura',
    name: 'Ventura / Channel Islands',
    region: 'Ventura County',
    lat: 34.2799,
    lon: -119.293,
    depth: '25-70 ft',
    description: 'Open-water dives with deeper reef structures and variable surf.',
    difficulty: 'Advanced',
    tideStationId: '9411340',
    preferredWaterTemp: 59,
    tidePreference: 'moving',
    defaultWaveHeight: 3.1,
    defaultWindSpeed: 16,
    environment: ['Rocky Reef', 'Mixed Bottom', 'Kelp Forest'],
    species: [
      {
        id: 'rockfish',
        name: 'Rockfish',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sebastes_chrysomelas.jpg/320px-Sebastes_chrysomelas.jpg',
        description: 'Abundant schooling fish around rock structure.'
      },
      {
        id: 'garibaldi-ventura',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Bright orange fish guarding territory in rock crevices.'
      }
    ]
  },
  {
    id: 'sunset-cliffs',
    name: 'Sunset Cliffs',
    region: 'San Diego',
    lat: 32.75,
    lon: -117.25,
    depth: '20-45 ft',
    description: 'Cliff-edge diving with rocky structure and frequent surge.',
    difficulty: 'Intermediate',
    tideStationId: '9410230',
    preferredWaterTemp: 62,
    tidePreference: 'moving',
    defaultWaveHeight: 2.0,
    defaultWindSpeed: 10,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'cabezon',
        name: 'Cabezon',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Scorpaenichthys_marmoratus.jpg/320px-Scorpaenichthys_marmoratus.jpg',
        description: 'Mottled bottom fish with a broad head.'
      },
      {
        id: 'sea-urchin-sunset',
        name: 'Purple Sea Urchin',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Strongylocentrotus_purpuratus.jpg/320px-Strongylocentrotus_purpuratus.jpg',
        description: 'Spiny grazer common on rocky ledges.'
      }
    ]
  },
  {
    id: 'ocean-beach-pier',
    name: 'Ocean Beach Pier',
    region: 'San Diego',
    lat: 32.754,
    lon: -117.242,
    depth: '12-30 ft',
    description: 'Pier dive with sandy bottom and piling structure.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.4,
    defaultWindSpeed: 8,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'anemone',
        name: 'Sea Anemone',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anthopleura_xanthogrammica.jpg/320px-Anthopleura_xanthogrammica.jpg',
        description: 'Colorful stationary invertebrate attached to structure.'
      },
      {
        id: 'perch',
        name: 'Surf Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Micrometrus_minimus.jpg/320px-Micrometrus_minimus.jpg',
        description: 'Small fish common around pier structure.'
      }
    ]
  },
  {
    id: 'mission-beach',
    name: 'Mission Beach',
    region: 'San Diego',
    lat: 32.766,
    lon: -117.254,
    depth: '15-40 ft',
    description: 'Beach-entry dive with moderate surf and sandy channels.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.5,
    defaultWindSpeed: 9,
    environment: ['Sand Flat', 'Artificial Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'halfmoon',
        name: 'Halfmoon',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Medialuna_californiensis.jpg/320px-Medialuna_californiensis.jpg',
        description: 'Silvery fish with a dark midline band.'
      },
      {
        id: 'sand-dollar',
        name: 'Sand Dollar',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dendraster_excentricus.jpg/320px-Dendraster_excentricus.jpg',
        description: 'Flat echinoid common in sandy bottoms.'
      }
    ]
  },
  {
    id: 'pacific-beach',
    name: 'Pacific Beach',
    region: 'San Diego',
    lat: 32.774,
    lon: -117.256,
    depth: '15-40 ft',
    description: 'Popular sandy shoreline with moderate conditions and easy access.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.6,
    defaultWindSpeed: 9,
    environment: ['Sand Flat', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'round-herring',
        name: 'Round Herring',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Clupea_harengus.jpg/320px-Clupea_harengus.jpg',
        description: 'Fast schooling fish common near shore.'
      },
      {
        id: 'angel-shark',
        name: 'Angel Shark',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Squatina_californica.jpg/320px-Squatina_californica.jpg',
        description: 'Flat, ray-like shark that camouflages on sand.'
      }
    ]
  },
  {
    id: 'crystal-pier',
    name: 'Crystal Pier',
    region: 'San Diego',
    lat: 32.778,
    lon: -117.258,
    depth: '12-28 ft',
    description: 'Pier dive with easy entry and a mix of pilings and sand.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.3,
    defaultWindSpeed: 8,
    environment: ['Pier Pilings', 'Sand Flat', 'Mixed Bottom'],
    species: [
      {
        id: 'turban-snail',
        name: 'Turban Snail',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Megastraea_undosa.jpg/320px-Megastraea_undosa.jpg',
        description: 'Large snail that grazes on algae.'
      },
      {
        id: 'sea-star-crystal',
        name: 'Sea Star',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg',
        description: 'Slow, spiny echinoderm common on the seabed.'
      }
    ]
  },
  {
    id: 'windansea',
    name: 'Windansea',
    region: 'San Diego',
    lat: 32.84,
    lon: -117.27,
    depth: '18-45 ft',
    description: 'Popular reef dive with surf action and kelp patches.',
    difficulty: 'Intermediate',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'moving',
    defaultWaveHeight: 1.9,
    defaultWindSpeed: 10,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'dragonet',
        name: 'Dragonet',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Callionymus_lyra.jpg/320px-Callionymus_lyra.jpg',
        description: 'Small bottom-dweller with dramatic fins.'
      },
      {
        id: 'garibaldi-windansea',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Bright orange reef guardian.'
      }
    ]
  },
  {
    id: 'torrey-pines',
    name: 'Torrey Pines',
    region: 'San Diego',
    lat: 32.92,
    lon: -117.26,
    depth: '20-50 ft',
    description: 'Cliffside reef dive with deep underwater drop-offs.',
    difficulty: 'Intermediate',
    tideStationId: '9410230',
    preferredWaterTemp: 62,
    tidePreference: 'moving',
    defaultWaveHeight: 2.1,
    defaultWindSpeed: 11,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'topsmelt',
        name: 'Topsmelt',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Atherinops_affinis.jpg/320px-Atherinops_affinis.jpg',
        description: 'Fast schooling fish common in nearshore waters.'
      },
      {
        id: 'black-and-yellow-rockfish',
        name: 'Black-and-Yellow Rockfish',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sebastes_chrysomelas.jpg/320px-Sebastes_chrysomelas.jpg',
        description: 'Common reef fish with vivid yellow markings.'
      }
    ]
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    region: 'North County San Diego',
    lat: 32.98,
    lon: -117.27,
    depth: '15-40 ft',
    description: 'Sandy shoreline with moderate surge and easy dive windows.',
    difficulty: 'Beginner',
    tideStationId: '9410230',
    preferredWaterTemp: 63,
    tidePreference: 'slack',
    defaultWaveHeight: 1.5,
    defaultWindSpeed: 9,
    environment: ['Sand Flat', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'bat-ray-solana',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Large ray cruising the shallow sand flats.'
      },
      {
        id: 'sanddab',
        name: 'Sanddab',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Citharichthys_stigmaeus.jpg/320px-Citharichthys_stigmaeus.jpg',
        description: 'Flatfish commonly buried in sand.'
      }
    ]
  },
  {
    id: 'blacks-beach',
    name: "Black's Beach",
    region: 'San Diego',
    lat: 32.88,
    lon: -117.26,
    depth: '20-70 ft',
    description: 'Deep sandy beach entry with stronger surge and bigger swells.',
    difficulty: 'Advanced',
    tideStationId: '9410230',
    preferredWaterTemp: 61,
    tidePreference: 'moving',
    defaultWaveHeight: 2.8,
    defaultWindSpeed: 14,
    environment: ['Sand Flat', 'Mixed Bottom', 'Rocky Reef'],
    species: [
      {
        id: 'yellow-rockfish',
        name: 'Yellow Rockfish',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sebastes_flavidus.jpg/320px-Sebastes_flavidus.jpg',
        description: 'Colorful reef fish common on deeper structure.'
      },
      {
        id: 'squid',
        name: 'Market Squid',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Doryteuthis_opalescens.jpg/320px-Doryteuthis_opalescens.jpg',
        description: 'Fast-moving cephalopod often schooling in open water.'
      }
    ]
  },
  {
    id: 'point-dume',
    name: 'Point Dume',
    region: 'Malibu',
    lat: 34.035,
    lon: -118.805,
    depth: '20-55 ft',
    description: 'Dramatic point dive with clearer water and reef edges.',
    difficulty: 'Intermediate',
    tideStationId: '9410840',
    preferredWaterTemp: 59,
    tidePreference: 'moving',
    defaultWaveHeight: 2.3,
    defaultWindSpeed: 12,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'lionhead-dab',
        name: 'Lionhead Dab',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Citharoides_spilopterus.jpg/320px-Citharoides_spilopterus.jpg',
        description: 'Flatfish with a distinctive head shape.'
      },
      {
        id: 'opaleye',
        name: 'Opal Eye Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Girella_nigricans.jpg/320px-Girella_nigricans.jpg',
        description: 'Herbivorous fish common over reef ledges.'
      }
    ]
  },
  {
    id: 'malibu-pier',
    name: 'Malibu Pier',
    region: 'Malibu',
    lat: 34.027,
    lon: -118.681,
    depth: '12-30 ft',
    description: 'Classic pier dive with sandy bottom and piles.',
    difficulty: 'Beginner',
    tideStationId: '9410840',
    preferredWaterTemp: 59,
    tidePreference: 'slack',
    defaultWaveHeight: 1.6,
    defaultWindSpeed: 9,
    environment: ['Pier Pilings', 'Sand Flat', 'Mixed Bottom'],
    species: [
      {
        id: 'shiner-perch',
        name: 'Shiner Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cymatogaster_aggregata.jpg/320px-Cymatogaster_aggregata.jpg',
        description: 'Small schooling fish common at the pier.'
      },
      {
        id: 'sea-star-malibu',
        name: 'Sea Star',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg',
        description: 'Slow-moving echinoderm on the sandy shelf.'
      }
    ]
  },
  {
    id: 'zuma-beach',
    name: 'Zuma Beach',
    region: 'Malibu',
    lat: 34.077,
    lon: -118.823,
    depth: '15-40 ft',
    description: 'Wide sandy beach entry with larger surf and open-water visibility.',
    difficulty: 'Beginner',
    tideStationId: '9410840',
    preferredWaterTemp: 59,
    tidePreference: 'slack',
    defaultWaveHeight: 1.8,
    defaultWindSpeed: 10,
    environment: ['Sand Flat', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'southern-ray',
        name: 'Southern Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hypanus_americanus.jpg/320px-Hypanus_americanus.jpg',
        description: 'Broad-bodied ray on the sandy bottom.'
      },
      {
        id: 'barred-sandbass',
        name: 'Barred Sand Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Paralabrax_nebulifer.jpg/320px-Paralabrax_nebulifer.jpg',
        description: 'Common fish around sand pockets and structure.'
      }
    ]
  },
  {
    id: 'point-vicente',
    name: 'Point Vicente',
    region: 'Rancho Palos Verdes',
    lat: 33.75,
    lon: -118.38,
    depth: '25-60 ft',
    description: 'Deep rocky point with excellent marine life and drift potential.',
    difficulty: 'Advanced',
    tideStationId: '9410850',
    preferredWaterTemp: 60,
    tidePreference: 'moving',
    defaultWaveHeight: 2.6,
    defaultWindSpeed: 14,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'spiny-lobster-pv',
        name: 'Spiny Lobster',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panulirus_interruptus.jpg/320px-Panulirus_interruptus.jpg',
        description: 'Lobsters often shelter in crevices and caves.'
      },
      {
        id: 'giant-sea-bass-pv',
        name: 'Giant Sea Bass',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stereolepis_gigas.jpg/320px-Stereolepis_gigas.jpg',
        description: 'Massive species occasionally encountered offshore.'
      }
    ]
  },
  {
    id: 'sacred-cove',
    name: 'Sacred Cove',
    region: 'Rancho Palos Verdes',
    lat: 33.74,
    lon: -118.37,
    depth: '15-35 ft',
    description: 'Protected cove with calmer conditions and reef habitat.',
    difficulty: 'Beginner',
    tideStationId: '9410850',
    preferredWaterTemp: 60,
    tidePreference: 'slack',
    defaultWaveHeight: 1.4,
    defaultWindSpeed: 8,
    environment: ['Cove', 'Rocky Reef', 'Kelp Forest'],
    species: [
      {
        id: 'garibaldi-sacred',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Orange reef fish commonly guarding territory in the cove.'
      },
      {
        id: 'moray-eel',
        name: 'Moray Eel',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gymnothorax_mordax.jpg/320px-Gymnothorax_mordax.jpg',
        description: 'Alert, eel-like fish hiding in rock recesses.'
      }
    ]
  },
  {
    id: 'long-point',
    name: 'Long Point',
    region: 'Rancho Palos Verdes',
    lat: 33.73,
    lon: -118.36,
    depth: '20-50 ft',
    description: 'Long reef point with deeper water and a strong current response.',
    difficulty: 'Intermediate',
    tideStationId: '9410850',
    preferredWaterTemp: 59,
    tidePreference: 'moving',
    defaultWaveHeight: 2.2,
    defaultWindSpeed: 12,
    environment: ['Rocky Reef', 'Mixed Bottom', 'Kelp Forest'],
    species: [
      {
        id: 'kelp-bass-long',
        name: 'Kelp Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Predatory fish cruising the reef ledges.'
      },
      {
        id: 'sea-lion-long',
        name: 'California Sea Lion',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Zalophus_californianus_2.jpg/320px-Zalophus_californianus_2.jpg',
        description: 'Playful mammal often seen nearby.'
      }
    ]
  },
  {
    id: 'dive-island',
    name: 'Dive Island',
    region: 'Rancho Palos Verdes',
    lat: 33.72,
    lon: -118.35,
    depth: '30-70 ft',
    description: 'Deeper island-like reef with productive marine life.',
    difficulty: 'Advanced',
    tideStationId: '9410850',
    preferredWaterTemp: 58,
    tidePreference: 'moving',
    defaultWaveHeight: 2.8,
    defaultWindSpeed: 15,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'giant-sea-bass-dive',
        name: 'Giant Sea Bass',
        rarity: 'Epic',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stereolepis_gigas.jpg/320px-Stereolepis_gigas.jpg',
        description: 'Rare giant grouper, a prized sighting.'
      },
      {
        id: 'yellowtail',
        name: 'Yellowtail',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Seriola_lalandi.jpg/320px-Seriola_lalandi.jpg',
        description: 'Fast pelagic fish occasionally cruising the edge.'
      }
    ]
  },
  {
    id: 'anacapa-landing',
    name: 'Anacapa Landing',
    region: 'Channel Islands',
    lat: 34.01,
    lon: -119.36,
    depth: '25-60 ft',
    description: 'Island dive with clear water and productive reef structures.',
    difficulty: 'Intermediate',
    tideStationId: '9411340',
    preferredWaterTemp: 59,
    tidePreference: 'moving',
    defaultWaveHeight: 2.5,
    defaultWindSpeed: 13,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'sheephead-anacapa',
        name: 'California Sheephead',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Semicossyphus_pulcher.jpg/320px-Semicossyphus_pulcher.jpg',
        description: 'Large wrasse prowling the hard bottom.'
      },
      {
        id: 'sea-lion-anacapa',
        name: 'California Sea Lion',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Zalophus_californianus_2.jpg/320px-Zalophus_californianus_2.jpg',
        description: 'Energetic marine mammal frequently seen around the island.'
      }
    ]
  },
  {
    id: 'santa-rosa-island',
    name: 'Santa Rosa Island',
    region: 'Channel Islands',
    lat: 34.08,
    lon: -120.13,
    depth: '30-70 ft',
    description: 'Advanced island site with greater current and open-water exposure.',
    difficulty: 'Advanced',
    tideStationId: '9411340',
    preferredWaterTemp: 58,
    tidePreference: 'moving',
    defaultWaveHeight: 3.0,
    defaultWindSpeed: 15,
    environment: ['Rocky Reef', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'giant-sea-bass-santa-rosa',
        name: 'Giant Sea Bass',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stereolepis_gigas.jpg/320px-Stereolepis_gigas.jpg',
        description: 'Impressive, rare predator of the island reefs.'
      },
      {
        id: 'blue-rockfish',
        name: 'Blue Rockfish',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sebastes_mystinus.jpg/320px-Sebastes_mystinus.jpg',
        description: 'A common inshore rockfish across the island edge.'
      }
    ]
  },
  {
    id: 'santa-barbara-wreck',
    name: 'Santa Barbara Wreck',
    region: 'Santa Barbara County',
    lat: 34.41,
    lon: -119.69,
    depth: '40-80 ft',
    description: 'Historic wreck dive with deeper water and more variable conditions.',
    difficulty: 'Advanced',
    tideStationId: '9411399',
    preferredWaterTemp: 57,
    tidePreference: 'moving',
    defaultWaveHeight: 3.2,
    defaultWindSpeed: 17,
    environment: ['Wreck', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'giant-sea-bass-sb',
        name: 'Giant Sea Bass',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stereolepis_gigas.jpg/320px-Stereolepis_gigas.jpg',
        description: 'Large grouper often cruising near wrecks.'
      },
      {
        id: 'yellowtail-sb',
        name: 'Yellowtail',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Seriola_lalandi.jpg/320px-Seriola_lalandi.jpg',
        description: 'Fast, pelagic schooling fish on the edge of the wreck.'
      }
    ]
  },
  {
    id: 'el-capitan',
    name: 'El Capitan',
    region: 'Santa Barbara County',
    lat: 34.465,
    lon: -119.945,
    depth: '25-60 ft',
    description: 'Dramatic reef and underwater canyon with stronger exposure.',
    difficulty: 'Advanced',
    tideStationId: '9411399',
    preferredWaterTemp: 57,
    tidePreference: 'moving',
    defaultWaveHeight: 3.0,
    defaultWindSpeed: 16,
    environment: ['Rocky Reef', 'Mixed Bottom', 'Kelp Forest'],
    species: [
      {
        id: 'blue-rockfish-el',
        name: 'Blue Rockfish',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sebastes_mystinus.jpg/320px-Sebastes_mystinus.jpg',
        description: 'Common schooling rockfish around mid-depth structure.'
      },
      {
        id: 'lizardfish',
        name: 'California Lizardfish',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/California_lizardfish.jpg/320px-California_lizardfish.jpg',
        description: 'Predatory fish resting in sediment pockets.'
      }
    ]
  },
  {
    id: 'point-mugu',
    name: 'Point Mugu',
    region: 'Ventura County',
    lat: 34.08,
    lon: -119.11,
    depth: '20-50 ft',
    description: 'Northern reef dive with mixed bottoms and a strong swell component.',
    difficulty: 'Intermediate',
    tideStationId: '9411340',
    preferredWaterTemp: 59,
    tidePreference: 'moving',
    defaultWaveHeight: 2.7,
    defaultWindSpeed: 14,
    environment: ['Rocky Reef', 'Sand Flat', 'Mixed Bottom'],
    species: [
      {
        id: 'rockfish-mugu',
        name: 'Rockfish',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sebastes_chrysomelas.jpg/320px-Sebastes_chrysomelas.jpg',
        description: 'Common reef fish on rock ledges and boulders.'
      },
      {
        id: 'sea-star-mugu',
        name: 'Sunflower Sea Star',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pycnopodia_helianthoides.jpg/320px-Pycnopodia_helianthoides.jpg',
        description: 'Large starfish on the reef edge.'
      }
    ]
  },
  {
    id: 'port-hueneme',
    name: 'Port Hueneme',
    region: 'Ventura County',
    lat: 34.148,
    lon: -119.2,
    depth: '15-35 ft',
    description: 'Harbor dive with a mix of structure and sandy bottom.',
    difficulty: 'Beginner',
    tideStationId: '9411340',
    preferredWaterTemp: 59,
    tidePreference: 'slack',
    defaultWaveHeight: 1.7,
    defaultWindSpeed: 10,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'perch-port',
        name: 'Shiner Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cymatogaster_aggregata.jpg/320px-Cymatogaster_aggregata.jpg',
        description: 'Small schooling fish in the harbor shallows.'
      },
      {
        id: 'anemone-port',
        name: 'Sea Anemone',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anthopleura_xanthogrammica.jpg/320px-Anthopleura_xanthogrammica.jpg',
        description: 'Stationary invertebrate clinging to structure.'
      }
    ]
  },
  {
    id: 'channel-islands-harbor',
    name: 'Channel Islands Harbor',
    region: 'Ventura County',
    lat: 34.17,
    lon: -119.22,
    depth: '12-30 ft',
    description: 'Harbor and marina site with easy access and approachable conditions.',
    difficulty: 'Beginner',
    tideStationId: '9411340',
    preferredWaterTemp: 59,
    tidePreference: 'slack',
    defaultWaveHeight: 1.6,
    defaultWindSpeed: 9,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'gobies',
        name: 'Gobies',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gobiidae.jpg/320px-Gobiidae.jpg',
        description: 'Small bottom fish among rocks and marina structure.'
      },
      {
        id: 'sea-star-harbor',
        name: 'Sea Star',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg',
        description: 'Slow-moving starfish on the edges of habitat.'
      }
    ]
  },
  {
    id: 'bolsa-chica',
    name: 'Bolsa Chica',
    region: 'Orange County',
    lat: 33.688,
    lon: -118.056,
    depth: '12-28 ft',
    description: 'Protected sandy shoreline dive with straightforward conditions.',
    difficulty: 'Beginner',
    tideStationId: '9410660',
    preferredWaterTemp: 61,
    tidePreference: 'slack',
    defaultWaveHeight: 1.2,
    defaultWindSpeed: 7,
    environment: ['Sand Flat', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'sanddab-bc',
        name: 'Sanddab',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Citharichthys_stigmaeus.jpg/320px-Citharichthys_stigmaeus.jpg',
        description: 'Flatfish suited to the sandy seabed.'
      },
      {
        id: 'barred-sandbass-bc',
        name: 'Barred Sand Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Paralabrax_nebulifer.jpg/320px-Paralabrax_nebulifer.jpg',
        description: 'Fish feeding over sandy drop-offs.'
      }
    ]
  },
  {
    id: 'huntington-pier',
    name: 'Huntington Beach Pier',
    region: 'Orange County',
    lat: 33.54,
    lon: -118.15,
    depth: '10-30 ft',
    description: 'Busy shore dive with structure and easy access.',
    difficulty: 'Beginner',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.5,
    defaultWindSpeed: 8,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'shiner-perch-hb',
        name: 'Shiner Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cymatogaster_aggregata.jpg/320px-Cymatogaster_aggregata.jpg',
        description: 'Common small fish around pier pilings.'
      },
      {
        id: 'gobies-hb',
        name: 'Gobies',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gobiidae.jpg/320px-Gobiidae.jpg',
        description: 'Small fish living in crevices and structure.'
      }
    ]
  },
  {
    id: 'newport-beach',
    name: 'Newport Beach',
    region: 'Orange County',
    lat: 33.60,
    lon: -117.89,
    depth: '15-45 ft',
    description: 'Harbor and reef dive with moderate access and midday calm.',
    difficulty: 'Intermediate',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.8,
    defaultWindSpeed: 9,
    environment: ['Sand Flat', 'Artificial Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'barred-sandbass-newport',
        name: 'Barred Sand Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Paralabrax_nebulifer.jpg/320px-Paralabrax_nebulifer.jpg',
        description: 'Active fish over sand and reef breaks.'
      },
      {
        id: 'bat-ray-newport',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Large ray cruising shallow sand flats.'
      }
    ]
  },
  {
    id: 'corona-del-mar',
    name: 'Corona del Mar',
    region: 'Orange County',
    lat: 33.60,
    lon: -117.88,
    depth: '20-50 ft',
    description: 'Protected cove with rugged reef edges and good visibility.',
    difficulty: 'Intermediate',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.9,
    defaultWindSpeed: 10,
    environment: ['Rocky Reef', 'Kelp Forest', 'Cove'],
    species: [
      {
        id: 'garibaldi-corona',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Colorful fish cruising the rocks and ledges.'
      },
      {
        id: 'sea-bass-corona',
        name: 'Kelp Bass',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Common predator around the reef edge.'
      }
    ]
  },
  {
    id: 'crystal-cove',
    name: 'Crystal Cove',
    region: 'Orange County',
    lat: 33.56,
    lon: -117.84,
    depth: '20-45 ft',
    description: 'Protected cove dive with reef and kelp habitat.',
    difficulty: 'Intermediate',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.7,
    defaultWindSpeed: 9,
    environment: ['Cove', 'Rocky Reef', 'Kelp Forest'],
    species: [
      {
        id: 'senorita-crystal',
        name: 'Señorita',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Oxyjulis_californica.jpg/320px-Oxyjulis_californica.jpg',
        description: 'Small wrasse in the kelp and reef zones.'
      },
      {
        id: 'walleye-surfperch',
        name: 'Walleye Surfperch',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Hyperprosopon_argenteum.jpg/320px-Hyperprosopon_argenteum.jpg',
        description: 'A schooling fish of the coastal shallows.'
      }
    ]
  },
  {
    id: 'emerald-bay',
    name: 'Emerald Bay',
    region: 'Catalina Island',
    lat: 33.347,
    lon: -118.325,
    depth: '18-50 ft',
    description: 'Protected bay with good visibility and classic island reef life.',
    difficulty: 'Beginner',
    tideStationId: '9414290',
    preferredWaterTemp: 61,
    tidePreference: 'slack',
    defaultWaveHeight: 1.8,
    defaultWindSpeed: 9,
    environment: ['Cove', 'Kelp Forest', 'Mixed Bottom'],
    species: [
      {
        id: 'garibaldi-emerald',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Vivid orange fish inhabiting the reef.'
      },
      {
        id: 'spiny-lobster-emerald',
        name: 'California Spiny Lobster',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panulirus_interruptus.jpg/320px-Panulirus_interruptus.jpg',
        description: 'Nocturnal resident in the bay crevices.'
      }
    ]
  },
  {
    id: 'avalon',
    name: 'Avalon',
    region: 'Catalina Island',
    lat: 33.34,
    lon: -118.327,
    depth: '20-60 ft',
    description: 'Popular bay dive with reef structures and active marine life.',
    difficulty: 'Beginner',
    tideStationId: '9414290',
    preferredWaterTemp: 61,
    tidePreference: 'slack',
    defaultWaveHeight: 1.6,
    defaultWindSpeed: 8,
    environment: ['Rocky Reef', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'kelp-bass-avalon',
        name: 'Kelp Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Common reef predator with a striped body.'
      },
      {
        id: 'sea-star-avalon',
        name: 'Sea Star',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg',
        description: 'Rugged echinoderm on the benthic habitat.'
      }
    ]
  },
  {
    id: 'lovers-cove',
    name: "Lover's Cove",
    region: 'Catalina Island',
    lat: 33.35,
    lon: -118.34,
    depth: '15-35 ft',
    description: 'Protected cove with clear water and easy reef access.',
    difficulty: 'Beginner',
    tideStationId: '9414290',
    preferredWaterTemp: 61,
    tidePreference: 'slack',
    defaultWaveHeight: 1.3,
    defaultWindSpeed: 7,
    environment: ['Cove', 'Rocky Reef', 'Kelp Forest'],
    species: [
      {
        id: 'garibaldi-lovers',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Vivid orange guardian of the small reef.'
      },
      {
        id: 'lobster-lovers',
        name: 'Spiny Lobster',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panulirus_interruptus.jpg/320px-Panulirus_interruptus.jpg',
        description: 'Creature often hiding in cracks and crevices.'
      }
    ]
  },
  {
    id: 'casa-cove',
    name: 'Casa Cove',
    region: 'Catalina Island',
    lat: 33.36,
    lon: -118.35,
    depth: '18-42 ft',
    description: 'Protected dive site with rocks, kelp, and reef fish.',
    difficulty: 'Intermediate',
    tideStationId: '9414290',
    preferredWaterTemp: 60,
    tidePreference: 'slack',
    defaultWaveHeight: 1.7,
    defaultWindSpeed: 9,
    environment: ['Cove', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'sheephead-casa',
        name: 'California Sheephead',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Semicossyphus_pulcher.jpg/320px-Semicossyphus_pulcher.jpg',
        description: 'Large wrasse often patrolling the reef.'
      },
      {
        id: 'kelp-bass-casa',
        name: 'Kelp Bass',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paralabrax_clathratus.jpg/320px-Paralabrax_clathratus.jpg',
        description: 'Predatory fish likely at the kelp edge.'
      }
    ]
  },
  {
    id: 'paradise-cove',
    name: 'Paradise Cove',
    region: 'Malibu',
    lat: 34.01,
    lon: -118.79,
    depth: '15-40 ft',
    description: 'Protected rocky cove with moderate surf and lush reef life.',
    difficulty: 'Beginner',
    tideStationId: '9410840',
    preferredWaterTemp: 60,
    tidePreference: 'slack',
    defaultWaveHeight: 1.5,
    defaultWindSpeed: 8,
    environment: ['Cove', 'Rocky Reef', 'Kelp Forest'],
    species: [
      {
        id: 'garibaldi-paradise',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'Orange fish common in nearby kelp habitat.'
      },
      {
        id: 'lingcod-paradise',
        name: 'Lingcod',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ophiodon_elongatus.jpg/320px-Ophiodon_elongatus.jpg',
        description: 'Large bottom fish tucked into rock shelves.'
      }
    ]
  },
  {
    id: 'crescent-bay',
    name: 'Crescent Bay',
    region: 'Malibu',
    lat: 34.037,
    lon: -118.88,
    depth: '18-42 ft',
    description: 'Scenic reef and sandy shelf with moderate marine life.',
    difficulty: 'Intermediate',
    tideStationId: '9410840',
    preferredWaterTemp: 60,
    tidePreference: 'moving',
    defaultWaveHeight: 2.0,
    defaultWindSpeed: 10,
    environment: ['Sand Flat', 'Rocky Reef', 'Mixed Bottom'],
    species: [
      {
        id: 'white-sea-bass',
        name: 'White Sea Bass',
        rarity: 'Rare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Atractoscion_nobilis.jpg/320px-Atractoscion_nobilis.jpg',
        description: 'Large, valuable fish occasionally patrolling the reef edge.'
      },
      {
        id: 'bat-ray-crescent',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Large ray gliding in the open sandy channels.'
      }
    ]
  },
  {
    id: 'san-clemente-pier',
    name: 'San Clemente Pier',
    region: 'Orange County',
    lat: 33.425,
    lon: -117.618,
    depth: '10-28 ft',
    description: 'Coastal pier site with manageable conditions and easy access.',
    difficulty: 'Beginner',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.4,
    defaultWindSpeed: 8,
    environment: ['Pier Pilings', 'Sand Flat', 'Artificial Reef'],
    species: [
      {
        id: 'surfperch-sanclemente',
        name: 'Surf Perch',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Micrometrus_minimus.jpg/320px-Micrometrus_minimus.jpg',
        description: 'Small fish around pier supports and adjacent shallows.'
      },
      {
        id: 'sea-star-sanclemente',
        name: 'Sea Star',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg',
        description: 'Stationary echinoderm in the calmer shallows.'
      }
    ]
  },
  {
    id: 'capistrano-beach',
    name: 'Capistrano Beach',
    region: 'Orange County',
    lat: 33.46,
    lon: -117.67,
    depth: '15-35 ft',
    description: 'Sandy beach entry with calmer pockets around reefs.',
    difficulty: 'Beginner',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.2,
    defaultWindSpeed: 7,
    environment: ['Sand Flat', 'Mixed Bottom', 'Artificial Reef'],
    species: [
      {
        id: 'sand-dab-capistrano',
        name: 'Sanddab',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Citharichthys_stigmaeus.jpg/320px-Citharichthys_stigmaeus.jpg',
        description: 'Flat and well camouflaged on sand.'
      },
      {
        id: 'ray-capistrano',
        name: 'Bat Ray',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Myliobatis_californica.jpg/320px-Myliobatis_californica.jpg',
        description: 'Common ray slowly cruising the shallows.'
      }
    ]
  },
  {
    id: 'little-corona',
    name: 'Little Corona',
    region: 'Orange County',
    lat: 33.596,
    lon: -117.872,
    depth: '18-42 ft',
    description: 'Protected pocket beach with reef edges and kelp patches.',
    difficulty: 'Beginner',
    tideStationId: '9410660',
    preferredWaterTemp: 62,
    tidePreference: 'slack',
    defaultWaveHeight: 1.3,
    defaultWindSpeed: 8,
    environment: ['Cove', 'Rocky Reef', 'Kelp Forest'],
    species: [
      {
        id: 'garibaldi-littlecorona',
        name: 'Garibaldi',
        rarity: 'Common',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hypsypops_rubicundus.jpg/320px-Hypsypops_rubicundus.jpg',
        description: 'A bright fish guarding rocky shore lines.'
      },
      {
        id: 'lobster-littlecorona',
        name: 'California Spiny Lobster',
        rarity: 'Uncommon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panulirus_interruptus.jpg/320px-Panulirus_interruptus.jpg',
        description: 'Often resting in holes and overhangs.'
      }
    ]
  }
];

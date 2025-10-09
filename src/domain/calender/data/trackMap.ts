import { circuitImages } from '@domain/calender/data/images.ts';

export interface TrackInfo {
  slug:
    | 'australian-grand-prix'
    | 'chinese-grand-prix'
    | 'japanese-grand-prix'
    | 'bahrain-grand-prix'
    | 'saudi-arabian-grand-prix'
    | 'miami-grand-prix'
    | 'emilia-romagna-grand-prix'
    | 'monaco-grand-prix'
    | 'spanish-grand-prix'
    | 'canadian-grand-prix'
    | 'austrian-grand-prix'
    | 'british-grand-prix'
    | 'hungarian-grand-prix'
    | 'belgian-grand-prix'
    | 'dutch-grand-prix'
    | 'italian-grand-prix'
    | 'azerbaijan-grand-prix'
    | 'singapore-grand-prix'
    | 'united-states-grand-prix'
    | 'mexico-city-grand-prix'
    | 'saopaulo-grand-prix'
    | 'las-vegas-grand-prix'
    | 'qatar-grand-prix'
    | 'abu-dhabi-grand-prix';
  circuit: string;
  location: string;
  firstGrandPrix: number;
  numberOfLaps: number;
  circuitLengthKm: number;
  raceDistanceKm: number;
  cornerCount: number;
  drsZones: number;
  lapRecord: {
    time: string;
    driver: string;
    year: number;
  };
  mapImage?: string;
  alt?: string;
}

export const trackInfos: TrackInfo[] = [
  {
    slug: 'australian-grand-prix',
    circuit: 'Albert Park Circuit',
    location: 'Melbourne, Australia',
    firstGrandPrix: 1996,
    numberOfLaps: 58,
    circuitLengthKm: 5.278,
    raceDistanceKm: 306.124,
    cornerCount: 14,
    drsZones: 4,
    lapRecord: {
      time: '1:20.235',
      driver: 'Carlos Sainz',
      year: 2024,
    },
    mapImage: circuitImages.Australia_circuit,
  },
  {
    slug: 'chinese-grand-prix',
    circuit: 'Shanghai International Circuit',
    location: 'Shanghai, China',
    firstGrandPrix: 2004,
    numberOfLaps: 56,
    circuitLengthKm: 5.451,
    raceDistanceKm: 305.066,
    cornerCount: 16,
    drsZones: 2,
    lapRecord: {
      time: '1:32.238',
      driver: 'Michael Schumacher',
      year: 2004,
    },
    mapImage: circuitImages.China_circuit,
  },
  {
    slug: 'japanese-grand-prix',
    circuit: 'Suzuka International Racing Course',
    location: 'Suzuka, Japan',
    firstGrandPrix: 1987,
    numberOfLaps: 53,
    circuitLengthKm: 5.807,
    raceDistanceKm: 307.471,
    cornerCount: 18,
    drsZones: 1,
    lapRecord: {
      time: '1:30.983',
      driver: 'Lewis Hamilton',
      year: 2019,
    },
    mapImage: circuitImages.Japan_circuit,
  },
  {
    slug: 'bahrain-grand-prix',
    circuit: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    firstGrandPrix: 2004,
    numberOfLaps: 57,
    circuitLengthKm: 5.412,
    raceDistanceKm: 308.238,
    cornerCount: 15,
    drsZones: 3,
    lapRecord: {
      time: '1:31.447',
      driver: 'Pedro de la Rosa',
      year: 2005,
    },
    mapImage: circuitImages.Bahrain_circuit,
  },
  {
    slug: 'saudi-arabian-grand-prix',
    circuit: 'Jeddah Corniche Circuit',
    location: 'Jeddah, Saudi Arabia',
    firstGrandPrix: 2021,
    numberOfLaps: 50,
    circuitLengthKm: 6.174,
    raceDistanceKm: 308.45,
    cornerCount: 27,
    drsZones: 3,
    lapRecord: {
      time: '1:30.734',
      driver: 'Lewis Hamilton',
      year: 2021,
    },
    mapImage: circuitImages.Saudi_Arabia_circuit,
  },
  {
    slug: 'miami-grand-prix',
    circuit: 'Miami International Autodrome',
    location: 'Miami, United States',
    firstGrandPrix: 2022,
    numberOfLaps: 57,
    circuitLengthKm: 5.412,
    raceDistanceKm: 308.326,
    cornerCount: 19,
    drsZones: 3,
    lapRecord: {
      time: '1:29.708',
      driver: 'Sergio Pérez',
      year: 2023,
    },
    mapImage: circuitImages.Miami_circuit,
  },
  {
    slug: 'emilia-romagna-grand-prix',
    circuit: 'Autodromo Enzo e Dino Ferrari',
    location: 'Imola, Italy',
    firstGrandPrix: 1980,
    numberOfLaps: 63,
    circuitLengthKm: 4.909,
    raceDistanceKm: 309.049,
    cornerCount: 19,
    drsZones: 1,
    lapRecord: {
      time: '1:15.484',
      driver: 'Lewis Hamilton',
      year: 2020,
    },
    mapImage: circuitImages.Emila_Romagna_circuit,
  },
  {
    slug: 'monaco-grand-prix',
    circuit: 'Circuit de Monaco',
    location: 'Monte Carlo, Monaco',
    firstGrandPrix: 1950,
    numberOfLaps: 78,
    circuitLengthKm: 3.337,
    raceDistanceKm: 260.286,
    cornerCount: 19,
    drsZones: 1,
    lapRecord: {
      time: '1:12.909',
      driver: 'Lewis Hamilton',
      year: 2021,
    },
    mapImage: circuitImages.Monaco_circuit,
  },
  {
    slug: 'spanish-grand-prix',
    circuit: 'Circuit de Barcelona-Catalunya',
    location: 'Barcelona, Spain',
    firstGrandPrix: 1991,
    numberOfLaps: 66,
    circuitLengthKm: 4.657,
    raceDistanceKm: 307.236,
    cornerCount: 16,
    drsZones: 2,
    lapRecord: {
      time: '1:16.330',
      driver: 'Max Verstappen',
      year: 2023,
    },
    mapImage: circuitImages.Spain_circuit,
  },
  {
    slug: 'canadian-grand-prix',
    circuit: 'Circuit Gilles Villeneuve',
    location: 'Montreal, Canada',
    firstGrandPrix: 1978,
    numberOfLaps: 70,
    circuitLengthKm: 4.361,
    raceDistanceKm: 305.27,
    cornerCount: 14,
    drsZones: 3,
    lapRecord: {
      time: '1:13.078',
      driver: 'Valtteri Bottas',
      year: 2019,
    },
    mapImage: circuitImages.Canada_circuit,
  },
  {
    slug: 'austrian-grand-prix',
    circuit: 'Red Bull Ring',
    location: 'Spielberg, Austria',
    firstGrandPrix: 1970,
    numberOfLaps: 71,
    circuitLengthKm: 4.318,
    raceDistanceKm: 306.452,
    cornerCount: 10,
    drsZones: 3,
    lapRecord: {
      time: '1:05.619',
      driver: 'Carlos Sainz',
      year: 2020,
    },
    mapImage: circuitImages.Austria_circuit,
  },
  {
    slug: 'british-grand-prix',
    circuit: 'Silverstone Circuit',
    location: 'Silverstone, United Kingdom',
    firstGrandPrix: 1950,
    numberOfLaps: 52,
    circuitLengthKm: 5.891,
    raceDistanceKm: 306.198,
    cornerCount: 18,
    drsZones: 3,
    lapRecord: {
      time: '1:27.097',
      driver: 'Max Verstappen',
      year: 2020,
    },
    mapImage: circuitImages.Great_Britain_circuit,
  },
  {
    slug: 'hungarian-grand-prix',
    circuit: 'Hungaroring',
    location: 'Budapest, Hungary',
    firstGrandPrix: 1986,
    numberOfLaps: 70,
    circuitLengthKm: 4.381,
    raceDistanceKm: 306.63,
    cornerCount: 14,
    drsZones: 2,
    lapRecord: {
      time: '1:16.627',
      driver: 'Lewis Hamilton',
      year: 2020,
    },
    mapImage: circuitImages.Hungary_circuit,
  },
  {
    slug: 'belgian-grand-prix',
    circuit: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot, Belgium',
    firstGrandPrix: 1950,
    numberOfLaps: 44,
    circuitLengthKm: 7.004,
    raceDistanceKm: 308.052,
    cornerCount: 19,
    drsZones: 2,
    lapRecord: {
      time: '1:46.286',
      driver: 'Valtteri Bottas',
      year: 2018,
    },
    mapImage: circuitImages.Belgium_circuit,
  },
  {
    slug: 'dutch-grand-prix',
    circuit: 'Circuit Zandvoort',
    location: 'Zandvoort, Netherlands',
    firstGrandPrix: 1952,
    numberOfLaps: 72,
    circuitLengthKm: 4.259,
    raceDistanceKm: 306.587,
    cornerCount: 14,
    drsZones: 2,
    lapRecord: {
      time: '1:11.097',
      driver: 'Lewis Hamilton',
      year: 2021,
    },
    mapImage: circuitImages.Netherlands_circuit,
  },
  {
    slug: 'italian-grand-prix',
    circuit: 'Autodromo Nazionale Monza',
    location: 'Monza, Italy',
    firstGrandPrix: 1950,
    numberOfLaps: 53,
    circuitLengthKm: 5.793,
    raceDistanceKm: 306.72,
    cornerCount: 11,
    drsZones: 2,
    lapRecord: {
      time: '1:21.046',
      driver: 'Rubens Barrichello',
      year: 2004,
    },
    mapImage: circuitImages.Italy_circuit,
  },
  {
    slug: 'azerbaijan-grand-prix',
    circuit: 'Baku City Circuit',
    location: 'Baku, Azerbaijan',
    firstGrandPrix: 2016,
    numberOfLaps: 51,
    circuitLengthKm: 6.003,
    raceDistanceKm: 306.049,
    cornerCount: 20,
    drsZones: 2,
    lapRecord: {
      time: '1:43.009',
      driver: 'Charles Leclerc',
      year: 2019,
    },
    mapImage: circuitImages.Baku_circuit,
  },
  {
    slug: 'singapore-grand-prix',
    circuit: 'Marina Bay Street Circuit',
    location: 'Singapore, Singapore',
    firstGrandPrix: 2008,
    numberOfLaps: 62,
    circuitLengthKm: 4.94,
    raceDistanceKm: 306.143,
    cornerCount: 19,
    drsZones: 2,
    lapRecord: {
      time: '1:41.905',
      driver: 'Kevin Magnussen',
      year: 2018,
    },
    mapImage: circuitImages.Singapore_circuit,
  },
  {
    slug: 'united-states-grand-prix',
    circuit: 'Circuit of The Americas',
    location: 'Austin, United States',
    firstGrandPrix: 2012,
    numberOfLaps: 56,
    circuitLengthKm: 5.513,
    raceDistanceKm: 308.405,
    cornerCount: 20,
    drsZones: 3,
    lapRecord: {
      time: '1:36.169',
      driver: 'Charles Leclerc',
      year: 2019,
    },
    mapImage: circuitImages.USA_circuit,
  },
  {
    slug: 'mexico-city-grand-prix',
    circuit: 'Autódromo Hermanos Rodríguez',
    location: 'Mexico City, Mexico',
    firstGrandPrix: 1963,
    numberOfLaps: 71,
    circuitLengthKm: 4.304,
    raceDistanceKm: 305.354,
    cornerCount: 16,
    drsZones: 3,
    lapRecord: {
      time: '1:17.774',
      driver: 'Valtteri Bottas',
      year: 2021,
    },
    mapImage: circuitImages.Mexico_circuit,
  },
  {
    slug: 'saopaulo-grand-prix',
    circuit: 'Autódromo José Carlos Pace',
    location: 'São Paulo, Brazil',
    firstGrandPrix: 1973,
    numberOfLaps: 71,
    circuitLengthKm: 4.309,
    raceDistanceKm: 305.879,
    cornerCount: 15,
    drsZones: 2,
    lapRecord: {
      time: '1:10.540',
      driver: 'Valtteri Bottas',
      year: 2018,
    },
    mapImage: circuitImages.Brazil_circuit,
  },
  {
    slug: 'las-vegas-grand-prix',
    circuit: 'Las Vegas Strip Circuit',
    location: 'Las Vegas, United States',
    firstGrandPrix: 2023,
    numberOfLaps: 50,
    circuitLengthKm: 6.201,
    raceDistanceKm: 310.05,
    cornerCount: 17,
    drsZones: 2,
    lapRecord: {
      time: '1:35.490',
      driver: 'Oscar Piastri',
      year: 2023,
    },
    mapImage: circuitImages.Las_Vegas_circuit,
  },
  {
    slug: 'qatar-grand-prix',
    circuit: 'Lusail International Circuit',
    location: 'Lusail, Qatar',
    firstGrandPrix: 2021,
    numberOfLaps: 57,
    circuitLengthKm: 5.419,
    raceDistanceKm: 308.611,
    cornerCount: 16,
    drsZones: 3,
    lapRecord: {
      time: '1:24.319',
      driver: 'Lando Norris',
      year: 2021,
    },
    mapImage: circuitImages.Qatar_circuit,
  },
  {
    slug: 'abu-dhabi-grand-prix',
    circuit: 'Yas Marina Circuit',
    location: 'Abu Dhabi, United Arab Emirates',
    firstGrandPrix: 2009,
    numberOfLaps: 58,
    circuitLengthKm: 5.281,
    raceDistanceKm: 306.183,
    cornerCount: 16,
    drsZones: 3,
    lapRecord: {
      time: '1:26.103',
      driver: 'Max Verstappen',
      year: 2021,
    },
    mapImage: circuitImages.Abu_Dhabi_circuit,
  },
];

export const findTrackInfo = (slug: TrackInfo['slug']) =>
  trackInfos.find((track) => track.slug === slug);

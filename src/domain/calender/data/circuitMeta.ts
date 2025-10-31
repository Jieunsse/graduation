import type { TrackInfo } from '@domain/calender/data/trackMap.ts';

export interface CircuitMeta {
  slug: TrackInfo['slug'];
  circuitName: string;
  grandPrix: {
    en: string;
    ko: string;
  };
  location: {
    country: {
      en: string;
      ko: string;
    };
    city: {
      en: string;
      ko: string;
    };
  };
}

export const circuitMetas: CircuitMeta[] = [
  {
    slug: 'australian-grand-prix',
    circuitName: 'Albert Park Circuit',
    grandPrix: {
      en: 'Australian Grand Prix',
      ko: '호주 그랑프리',
    },
    location: {
      country: { en: 'Australia', ko: '호주' },
      city: { en: 'Melbourne', ko: '멜버른' },
    },
  },
  {
    slug: 'chinese-grand-prix',
    circuitName: 'Shanghai International Circuit',
    grandPrix: {
      en: 'Chinese Grand Prix',
      ko: '중국 그랑프리',
    },
    location: {
      country: { en: 'China', ko: '중국' },
      city: { en: 'Shanghai', ko: '상하이' },
    },
  },
  {
    slug: 'japanese-grand-prix',
    circuitName: 'Suzuka International Racing Course',
    grandPrix: {
      en: 'Japanese Grand Prix',
      ko: '일본 그랑프리',
    },
    location: {
      country: { en: 'Japan', ko: '일본' },
      city: { en: 'Suzuka', ko: '스즈카' },
    },
  },
  {
    slug: 'bahrain-grand-prix',
    circuitName: 'Bahrain International Circuit',
    grandPrix: {
      en: 'Bahrain Grand Prix',
      ko: '바레인 그랑프리',
    },
    location: {
      country: { en: 'Bahrain', ko: '바레인' },
      city: { en: 'Sakhir', ko: '사키르' },
    },
  },
  {
    slug: 'saudi-arabian-grand-prix',
    circuitName: 'Jeddah Corniche Circuit',
    grandPrix: {
      en: 'Saudi Arabian Grand Prix',
      ko: '사우디아라비아 그랑프리',
    },
    location: {
      country: { en: 'Saudi Arabia', ko: '사우디아라비아' },
      city: { en: 'Jeddah', ko: '제다' },
    },
  },
  {
    slug: 'miami-grand-prix',
    circuitName: 'Miami International Autodrome',
    grandPrix: {
      en: 'Miami Grand Prix',
      ko: '마이애미 그랑프리',
    },
    location: {
      country: { en: 'United States', ko: '미국' },
      city: { en: 'Miami', ko: '마이애미' },
    },
  },
  {
    slug: 'emilia-romagna-grand-prix',
    circuitName: 'Autodromo Enzo e Dino Ferrari',
    grandPrix: {
      en: 'Emilia-Romagna Grand Prix',
      ko: '에밀리아 로마냐 그랑프리',
    },
    location: {
      country: { en: 'Italy', ko: '이탈리아' },
      city: { en: 'Imola', ko: '임올라' },
    },
  },
  {
    slug: 'monaco-grand-prix',
    circuitName: 'Circuit de Monaco',
    grandPrix: {
      en: 'Monaco Grand Prix',
      ko: '모나코 그랑프리',
    },
    location: {
      country: { en: 'Monaco', ko: '모나코' },
      city: { en: 'Monte Carlo', ko: '몬테카를로' },
    },
  },
  {
    slug: 'spanish-grand-prix',
    circuitName: 'Circuit de Barcelona-Catalunya',
    grandPrix: {
      en: 'Spanish Grand Prix',
      ko: '스페인 그랑프리',
    },
    location: {
      country: { en: 'Spain', ko: '스페인' },
      city: { en: 'Montmeló', ko: '몬트멜로' },
    },
  },
  {
    slug: 'canadian-grand-prix',
    circuitName: 'Circuit Gilles Villeneuve',
    grandPrix: {
      en: 'Canadian Grand Prix',
      ko: '캐나다 그랑프리',
    },
    location: {
      country: { en: 'Canada', ko: '캐나다' },
      city: { en: 'Montreal', ko: '몬트리올' },
    },
  },
  {
    slug: 'austrian-grand-prix',
    circuitName: 'Red Bull Ring',
    grandPrix: {
      en: 'Austrian Grand Prix',
      ko: '오스트리아 그랑프리',
    },
    location: {
      country: { en: 'Austria', ko: '오스트리아' },
      city: { en: 'Spielberg', ko: '스피엘베르크' },
    },
  },
  {
    slug: 'british-grand-prix',
    circuitName: 'Silverstone Circuit',
    grandPrix: {
      en: 'British Grand Prix',
      ko: '영국 그랑프리',
    },
    location: {
      country: { en: 'United Kingdom', ko: '영국' },
      city: { en: 'Silverstone', ko: '실버스톤' },
    },
  },
  {
    slug: 'belgian-grand-prix',
    circuitName: 'Circuit de Spa-Francorchamps',
    grandPrix: {
      en: 'Belgian Grand Prix',
      ko: '벨기에 그랑프리',
    },
    location: {
      country: { en: 'Belgium', ko: '벨기에' },
      city: { en: 'Spa', ko: '스파' },
    },
  },
  {
    slug: 'hungarian-grand-prix',
    circuitName: 'Hungaroring',
    grandPrix: {
      en: 'Hungarian Grand Prix',
      ko: '헝가리 그랑프리',
    },
    location: {
      country: { en: 'Hungary', ko: '헝가리' },
      city: { en: 'Budapest', ko: '부다페스트 근교' },
    },
  },
  {
    slug: 'dutch-grand-prix',
    circuitName: 'Circuit Zandvoort',
    grandPrix: {
      en: 'Dutch Grand Prix',
      ko: '네덜란드 그랑프리',
    },
    location: {
      country: { en: 'Netherlands', ko: '네덜란드' },
      city: { en: 'Zandvoort', ko: '잔트보르트' },
    },
  },
  {
    slug: 'italian-grand-prix',
    circuitName: 'Autodromo Nazionale Monza',
    grandPrix: {
      en: 'Italian Grand Prix',
      ko: '이탈리아 그랑프리',
    },
    location: {
      country: { en: 'Italy', ko: '이탈리아' },
      city: { en: 'Monza', ko: '몬차' },
    },
  },
  {
    slug: 'azerbaijan-grand-prix',
    circuitName: 'Baku City Circuit',
    grandPrix: {
      en: 'Azerbaijan Grand Prix',
      ko: '아제르바이잔 그랑프리',
    },
    location: {
      country: { en: 'Azerbaijan', ko: '아제르바이잔' },
      city: { en: 'Baku', ko: '바쿠' },
    },
  },
  {
    slug: 'singapore-grand-prix',
    circuitName: 'Marina Bay Street Circuit',
    grandPrix: {
      en: 'Singapore Grand Prix',
      ko: '싱가포르 그랑프리',
    },
    location: {
      country: { en: 'Singapore', ko: '싱가포르' },
      city: { en: 'Singapore', ko: '싱가포르' },
    },
  },
  {
    slug: 'united-states-grand-prix',
    circuitName: 'Circuit of The Americas',
    grandPrix: {
      en: 'United States Grand Prix',
      ko: '미국 그랑프리',
    },
    location: {
      country: { en: 'United States', ko: '미국' },
      city: { en: 'Austin', ko: '오스틴' },
    },
  },
  {
    slug: 'mexico-city-grand-prix',
    circuitName: 'Autódromo Hermanos Rodríguez',
    grandPrix: {
      en: 'Mexico City Grand Prix',
      ko: '멕시코시티 그랑프리',
    },
    location: {
      country: { en: 'Mexico', ko: '멕시코' },
      city: { en: 'Mexico City', ko: '멕시코시티' },
    },
  },
  {
    slug: 'saopaulo-grand-prix',
    circuitName: 'Autódromo José Carlos Pace',
    grandPrix: {
      en: 'São Paulo Grand Prix',
      ko: '상파울루 그랑프리',
    },
    location: {
      country: { en: 'Brazil', ko: '브라질' },
      city: { en: 'São Paulo', ko: '상파울루' },
    },
  },
  {
    slug: 'las-vegas-grand-prix',
    circuitName: 'Las Vegas Street Circuit',
    grandPrix: {
      en: 'Las Vegas Grand Prix',
      ko: '라스베이거스 그랑프리',
    },
    location: {
      country: { en: 'United States', ko: '미국' },
      city: { en: 'Las Vegas', ko: '라스베가스' },
    },
  },
  {
    slug: 'qatar-grand-prix',
    circuitName: 'Lusail International Circuit',
    grandPrix: {
      en: 'Qatar Grand Prix',
      ko: '카타르 그랑프리',
    },
    location: {
      country: { en: 'Qatar', ko: '카타르' },
      city: { en: 'Lusail', ko: '루사일' },
    },
  },
  {
    slug: 'abu-dhabi-grand-prix',
    circuitName: 'Yas Marina Circuit',
    grandPrix: {
      en: 'Abu Dhabi Grand Prix',
      ko: '아부다비 그랑프리',
    },
    location: {
      country: { en: 'United Arab Emirates', ko: '아랍에미리트' },
      city: { en: 'Abu Dhabi', ko: '아부다비' },
    },
  },
];

export const findCircuitMeta = (slug: TrackInfo['slug']) =>
  circuitMetas.find((circuit) => circuit.slug === slug);

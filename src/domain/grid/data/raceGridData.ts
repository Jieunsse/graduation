import { resolveDriverMetadata } from '@domain/grid/data/driverMetadata.ts';
import type { GridListItem } from '@domain/grid/components/GridList.tsx';

export type RaceKey =
  | 'australia'
  | 'china'
  | 'japan'
  | 'bahrain'
  | 'saudiArabia'
  | 'miami'
  | 'emiliaRomagna'
  | 'monaco'
  | 'spain'
  | 'canada'
  | 'austria'
  | 'britain'
  | 'belgium'
  | 'hungary'
  | 'netherlands'
  | 'italy'
  | 'azerbaijan'
  | 'singapore'
  | 'unitedStates'
  | 'mexico'
  | 'brazil'
  | 'lasVegas'
  | 'qatar'
  | 'abuDhabi';

export interface RaceOption {
  key: RaceKey;
  label: string;
}

interface RaceDefinition {
  key: RaceKey;
  circuit: string;
  grandPrix: string;
  order: number[];
}

const baseOrder: readonly number[] = [
  1, 63, 16, 4, 81, 44, 55, 14, 18, 10, 31, 27, 23, 43, 5, 30, 22, 20, 87, 12,
];

const rotateOrder = (order: readonly number[], offset: number): number[] => {
  if (order.length === 0) {
    return [];
  }

  const normalizedOffset = ((offset % order.length) + order.length) % order.length;
  if (normalizedOffset === 0) {
    return [...order];
  }

  return [
    ...order.slice(normalizedOffset),
    ...order.slice(0, normalizedOffset),
  ];
};

const makeOrder = (
  offset: number,
  swaps: Array<[number, number]> = []
): number[] =>
  swaps.reduce((currentOrder, [firstIndex, secondIndex]) => {
    if (
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex >= currentOrder.length ||
      secondIndex >= currentOrder.length
    ) {
      return currentOrder;
    }

    const nextOrder = [...currentOrder];
    [nextOrder[firstIndex], nextOrder[secondIndex]] = [
      nextOrder[secondIndex],
      nextOrder[firstIndex],
    ];
    return nextOrder;
  }, rotateOrder(baseOrder, offset));

const raceDefinitions: RaceDefinition[] = [
  {
    key: 'australia',
    circuit: 'Albert Park Circuit (호주, 멜버른)',
    grandPrix: 'Australian Grand Prix',
    order: makeOrder(1, [
      [0, 1],
      [4, 5],
    ]),
  },
  {
    key: 'china',
    circuit: 'Shanghai International Circuit (중국, 상하이)',
    grandPrix: 'Chinese Grand Prix',
    order: makeOrder(2),
  },
  {
    key: 'japan',
    circuit: 'Suzuka Circuit (일본, 스즈카)',
    grandPrix: 'Japanese Grand Prix',
    order: makeOrder(3, [[2, 3]]),
  },
  {
    key: 'bahrain',
    circuit: 'Bahrain International Circuit (바레인, 사키르)',
    grandPrix: 'Bahrain Grand Prix',
    order: makeOrder(0),
  },
  {
    key: 'saudiArabia',
    circuit: 'Jeddah Corniche Circuit (사우디아라비아, 제다)',
    grandPrix: 'Saudi Arabian Grand Prix',
    order: makeOrder(4, [[6, 7]]),
  },
  {
    key: 'miami',
    circuit: 'Miami International Autodrome (미국, 마이애미)',
    grandPrix: 'Miami Grand Prix',
    order: makeOrder(5),
  },
  {
    key: 'emiliaRomagna',
    circuit: 'Autodromo Enzo e Dino Ferrari (이탈리아, 임올라)',
    grandPrix: 'Emilia-Romagna Grand Prix',
    order: makeOrder(6, [[1, 2]]),
  },
  {
    key: 'monaco',
    circuit: 'Circuit de Monaco (모나코, 몬테카를로)',
    grandPrix: 'Monaco Grand Prix',
    order: makeOrder(7),
  },
  {
    key: 'spain',
    circuit: 'Circuit de Barcelona-Catalunya (스페인, 몬트멜로)',
    grandPrix: 'Spanish Grand Prix',
    order: makeOrder(8, [[8, 9]]),
  },
  {
    key: 'canada',
    circuit: 'Circuit Gilles-Villeneuve (캐나다, 몬트리올)',
    grandPrix: 'Canadian Grand Prix',
    order: makeOrder(9),
  },
  {
    key: 'austria',
    circuit: 'Red Bull Ring (오스트리아, 스피엘베르크)',
    grandPrix: 'Austrian Grand Prix',
    order: makeOrder(10, [[0, 4]]),
  },
  {
    key: 'britain',
    circuit: 'Silverstone Circuit (영국, 실버스톤)',
    grandPrix: 'British Grand Prix',
    order: makeOrder(11),
  },
  {
    key: 'belgium',
    circuit: 'Circuit de Spa-Francorchamps (벨기에, 스파)',
    grandPrix: 'Belgian Grand Prix',
    order: makeOrder(12, [[10, 11]]),
  },
  {
    key: 'hungary',
    circuit: 'Hungaroring (헝가리, 부다페스트 근교)',
    grandPrix: 'Hungarian Grand Prix',
    order: makeOrder(13),
  },
  {
    key: 'netherlands',
    circuit: 'Circuit Zandvoort (네덜란드, 잔트보르트)',
    grandPrix: 'Dutch Grand Prix',
    order: makeOrder(14, [[3, 4]]),
  },
  {
    key: 'italy',
    circuit: 'Autodromo Nazionale di Monza (이탈리아, 몬차)',
    grandPrix: 'Italian Grand Prix',
    order: makeOrder(15),
  },
  {
    key: 'azerbaijan',
    circuit: 'Baku City Circuit (아제르바이잔, 바쿠)',
    grandPrix: 'Azerbaijan Grand Prix',
    order: makeOrder(16, [[14, 15]]),
  },
  {
    key: 'singapore',
    circuit: 'Marina Bay Street Circuit (싱가포르)',
    grandPrix: 'Singapore Grand Prix',
    order: makeOrder(17),
  },
  {
    key: 'unitedStates',
    circuit: 'Circuit of the Americas (미국, 오스틴)',
    grandPrix: 'United States Grand Prix',
    order: makeOrder(18, [[5, 6]]),
  },
  {
    key: 'mexico',
    circuit: 'Autódromo Hermanos Rodríguez (멕시코, 멕시코시티)',
    grandPrix: 'Mexico City Grand Prix',
    order: makeOrder(19),
  },
  {
    key: 'brazil',
    circuit: 'Autódromo José Carlos Pace (브라질, 상파울루)',
    grandPrix: 'São Paulo Grand Prix',
    order: makeOrder(5, [
      [0, 2],
      [6, 7],
    ]),
  },
  {
    key: 'lasVegas',
    circuit: 'Las Vegas Street Circuit (미국, 라스베가스)',
    grandPrix: 'Las Vegas Grand Prix',
    order: makeOrder(8, [
      [1, 3],
      [9, 10],
    ]),
  },
  {
    key: 'qatar',
    circuit: 'Lusail International Circuit (카타르, 루사일)',
    grandPrix: 'Qatar Grand Prix',
    order: makeOrder(11, [
      [4, 5],
      [12, 13],
    ]),
  },
  {
    key: 'abuDhabi',
    circuit: 'Yas Marina Circuit (아랍에미리트, 아부다비)',
    grandPrix: 'Abu Dhabi Grand Prix',
    order: makeOrder(14, [
      [2, 5],
      [15, 16],
    ]),
  },
];

const mapOrderToGridItems = (order: number[]): GridListItem[] =>
  order.map((driverNumber, index) => {
    const metadata = resolveDriverMetadata(driverNumber);
    const driverName = metadata?.koreanName ?? `드라이버 ${driverNumber}`;
    const teamName = metadata?.teamName ?? '팀 정보 없음';
    const teamColor = metadata?.teamColor ?? '#7B61FF';
    const imageUrl =
      metadata?.imageUrl ??
      'https://via.placeholder.com/320x480/0f172a/ffffff?text=Driver';

    return {
      position: index + 1,
      driverNumber,
      driverName,
      teamName,
      teamColor,
      imageUrl,
    } satisfies GridListItem;
  });

export const raceOptions: RaceOption[] = raceDefinitions.map(
  ({ key, circuit, grandPrix }) => ({
    key,
    label: `${circuit} — ${grandPrix}`,
  })
);

export const DEFAULT_RACE_KEY: RaceKey = raceDefinitions[0]?.key ?? 'bahrain';

export const raceGridItems: Record<RaceKey, GridListItem[]> = raceDefinitions.reduce(
  (acc, definition) => {
    acc[definition.key] = mapOrderToGridItems(definition.order);
    return acc;
  },
  {} as Record<RaceKey, GridListItem[]>
);

export const getRaceGridItems = (raceKey: RaceKey): GridListItem[] =>
  raceGridItems[raceKey] ?? [];

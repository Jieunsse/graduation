import { resolveDriverMetadata } from '@domain/grid/data/driverMetadata.ts';
import type { GridListItem } from '@domain/grid/components/GridList.tsx';

const baseOrder = [
  1, 16, 55, 44, 63, 4, 81, 14, 18, 31, 10, 22, 27, 23, 43, 5, 30, 20, 87, 12,
] as const;

const reversedBaseOrder = [...baseOrder].reverse() as const;

const rotateOrder = (shift: number): number[] => {
  const length = baseOrder.length;
  return Array.from({ length }, (_, index) => baseOrder[(index + shift) % length]);
};

const rotateReversedOrder = (shift: number): number[] => {
  const length = reversedBaseOrder.length;
  return Array.from(
    { length },
    (_, index) => reversedBaseOrder[(index + shift) % length]
  );
};

const raceDefinitions = [
  {
    key: 'australian',
    label: 'Australian Grand Prix',
    order: [...baseOrder],
  },
  {
    key: 'chinese',
    label: 'Chinese Grand Prix',
    order: rotateOrder(3),
  },
  {
    key: 'japanese',
    label: 'Japanese Grand Prix',
    order: rotateOrder(6),
  },
  {
    key: 'bahrain',
    label: 'Bahrain Grand Prix',
    order: rotateOrder(9),
  },
  {
    key: 'saudiArabian',
    label: 'Saudi Arabian Grand Prix',
    order: rotateOrder(12),
  },
  {
    key: 'miami',
    label: 'Miami Grand Prix',
    order: rotateOrder(15),
  },
  {
    key: 'emiliaRomagna',
    label: 'Emilia-Romagna Grand Prix',
    order: rotateOrder(18),
  },
  {
    key: 'monaco',
    label: 'Monaco Grand Prix',
    order: rotateOrder(1),
  },
  {
    key: 'spanish',
    label: 'Spanish Grand Prix',
    order: rotateOrder(4),
  },
  {
    key: 'canadian',
    label: 'Canadian Grand Prix',
    order: rotateOrder(7),
  },
  {
    key: 'austrian',
    label: 'Austrian Grand Prix',
    order: rotateOrder(10),
  },
  {
    key: 'british',
    label: 'British Grand Prix',
    order: rotateOrder(13),
  },
  {
    key: 'belgian',
    label: 'Belgian Grand Prix',
    order: rotateOrder(16),
  },
  {
    key: 'hungarian',
    label: 'Hungarian Grand Prix',
    order: rotateOrder(19),
  },
  {
    key: 'dutch',
    label: 'Dutch Grand Prix',
    order: rotateOrder(2),
  },
  {
    key: 'italian',
    label: 'Italian Grand Prix',
    order: rotateOrder(5),
  },
  {
    key: 'azerbaijan',
    label: 'Azerbaijan Grand Prix',
    order: rotateOrder(8),
  },
  {
    key: 'singapore',
    label: 'Singapore Grand Prix',
    order: rotateOrder(11),
  },
  {
    key: 'unitedStates',
    label: 'United States Grand Prix',
    order: rotateOrder(14),
  },
  {
    key: 'mexicoCity',
    label: 'Mexico City Grand Prix',
    order: rotateOrder(17),
  },
  {
    key: 'saoPaulo',
    label: 'São Paulo Grand Prix',
    order: rotateReversedOrder(0),
  },
  {
    key: 'lasVegas',
    label: 'Las Vegas Grand Prix',
    order: rotateReversedOrder(4),
  },
  {
    key: 'qatar',
    label: 'Qatar Grand Prix',
    order: rotateReversedOrder(8),
  },
  {
    key: 'abuDhabi',
    label: 'Abu Dhabi Grand Prix',
    order: rotateReversedOrder(12),
  },
] as const satisfies readonly {
  key: string;
  label: string;
  order: number[];
}[];

type RaceDefinition = (typeof raceDefinitions)[number];

export type RaceKey = RaceDefinition['key'];

export interface RaceOption {
  key: RaceKey;
  label: string;
}

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

export const raceOptions: RaceOption[] = raceDefinitions.map(({ key, label }) => ({
  key,
  label,
}));

export const DEFAULT_RACE_KEY: RaceKey = raceDefinitions[0]?.key ?? 'australian';

export const raceGridItems: Record<RaceKey, GridListItem[]> = raceDefinitions.reduce(
  (acc, definition) => {
    acc[definition.key] = mapOrderToGridItems(definition.order);
    return acc;
  },
  {} as Record<RaceKey, GridListItem[]>
);

export const getRaceGridItems = (raceKey: RaceKey): GridListItem[] =>
  raceGridItems[raceKey] ?? [];

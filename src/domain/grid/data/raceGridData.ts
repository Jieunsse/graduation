import { resolveDriverMetadata } from '@domain/grid/data/driverMetadata.ts';
import type { GridListItem } from '@domain/grid/components/GridList.tsx';

export type RaceKey = 'bahrain' | 'japanese' | 'monaco';

export interface RaceOption {
  key: RaceKey;
  label: string;
}

interface RaceDefinition {
  key: RaceKey;
  label: string;
  order: number[];
}

const raceDefinitions: RaceDefinition[] = [
  {
    key: 'bahrain',
    label: 'Bahrain GP',
    order: [
      1, 63, 16, 4, 81, 44, 55, 14, 18, 10, 31, 27, 23, 43, 5, 30, 22, 20, 87, 12,
    ],
  },
  {
    key: 'japanese',
    label: 'Japanese GP',
    order: [
      4, 1, 16, 81, 63, 44, 55, 14, 10, 22, 31, 27, 23, 18, 43, 30, 20, 5, 12, 87,
    ],
  },
  {
    key: 'monaco',
    label: 'Monaco GP',
    order: [
      16, 55, 1, 4, 81, 44, 63, 14, 22, 30, 20, 27, 23, 31, 10, 5, 43, 18, 12, 87,
    ],
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

export const raceOptions: RaceOption[] = raceDefinitions.map(({ key, label }) => ({
  key,
  label,
}));

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

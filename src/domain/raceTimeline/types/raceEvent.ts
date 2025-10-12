export interface RaceEvent {
  id: string;
  type: 'OVERTAKE' | 'CRASH' | 'PIT_STOP' | 'SAFETY_CAR' | 'RED_FLAG';
  driver: string;
  team?: string;
  lap: number;
  time: number;
  description: string;
  position?: number;
  relatedDrivers?: string[];
}

export type RaceEventType = RaceEvent['type'];

export const raceEventTypeLabel: Record<RaceEventType, string> = {
  OVERTAKE: '추월',
  CRASH: '사고',
  PIT_STOP: '피트스탑',
  SAFETY_CAR: '세이프티카',
  RED_FLAG: '레드플래그',
};

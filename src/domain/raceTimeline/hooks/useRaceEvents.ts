import { useQuery } from '@tanstack/react-query';
import { getRaceEvents } from '../api/raceEventApi.ts';
import type { RaceEvent } from '../types/raceEvent.ts';

export const raceEventsQueryKey = ['race-events'];

export const useRaceEvents = () => {
  return useQuery<RaceEvent[]>({
    queryKey: raceEventsQueryKey,
    queryFn: getRaceEvents,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
};

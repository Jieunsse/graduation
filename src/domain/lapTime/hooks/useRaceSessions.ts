import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fetchRaceSessions } from '@domain/lapTime/api/lapTimeApi.ts';
import type { RaceSession } from '@domain/lapTime/types/lapTime.ts';

const sessionsMockUrl = new URL('../mock/raceSessionsMock.json', import.meta.url).href;

const fetchMockSessions = async (): Promise<RaceSession[]> => {
  const response = await axios.get<RaceSession[]>(sessionsMockUrl);
  return response.data;
};

export const useRaceSessions = (year: number) => {
  return useQuery({
    queryKey: ['race-sessions', year],
    queryFn: async () => {
      try {
        const data = await fetchRaceSessions(year);
        if (!data.length) {
          throw new Error('empty race sessions');
        }
        return data;
      } catch (error) {
        console.warn('세션 목록 API 호출 실패, mock 데이터를 사용합니다.', error);
        return fetchMockSessions();
      }
    },
    staleTime: 1000 * 60 * 60,
  });
};

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fetchLapTimes } from '@domain/lapTime/api/lapTimeApi.ts';
import type { LapTime } from '@domain/lapTime/types/lapTime.ts';

const mockUrl = new URL('../mock/lapTimeMock.json', import.meta.url).href;

const fetchMockLapTimes = async (): Promise<LapTime[]> => {
  const response = await axios.get<LapTime[]>(mockUrl);
  return response.data;
};

export const useLapTimeData = (sessionKey: number) => {
  return useQuery({
    queryKey: ['lap-times', sessionKey],
    queryFn: async () => {
      try {
        const data = await fetchLapTimes(sessionKey);
        if (!data.length) {
          throw new Error('empty lap times');
        }
        return data;
      } catch (error) {
        console.warn('랩타임 API 호출 실패, mock 데이터를 사용합니다.', error);
        return fetchMockLapTimes();
      }
    },
    staleTime: 1000 * 60,
  });
};

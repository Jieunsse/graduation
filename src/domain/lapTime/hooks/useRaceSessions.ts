import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fetchRaceSessions } from '@domain/lapTime/api/lapTimeApi.ts';
import { CalenderEvents } from '@domain/calender/data/calender.ts';
import type { RaceSession } from '@domain/lapTime/types/lapTime.ts';

const sessionsMockUrl = new URL('../mock/raceSessionsMock.json', import.meta.url).href;

const buildCalendarFallback = (): RaceSession[] =>
  CalenderEvents.map((event) => {
    const race = event.sessions.find((session) => session.type === 'race');
    const date = race?.start ?? event.raceStart;
    const sessionKey = Number.isNaN(new Date(date).getTime())
      ? event.round
      : Math.abs(Math.floor(new Date(date).getTime() / 1000));

    return {
      sessionKey,
      meetingName: event.eventName,
      sessionName: race?.label ?? 'Race',
      date,
      location: [event.country, event.locality].filter(Boolean).join(' • ') || undefined,
    } satisfies RaceSession;
  }).sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
      return 0;
    }
    return bTime - aTime;
  });

const fetchMockSessions = async (): Promise<RaceSession[]> => {
  try {
    const response = await axios.get<RaceSession[]>(sessionsMockUrl);
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.warn('mock 세션 데이터를 불러오지 못했습니다.', error);
  }

  return buildCalendarFallback();
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

import type { RaceEvent } from '../types/raceEvent.ts';
import { axiosInstance } from './axiosInstance.ts';
import { mockRaceEvents } from '../data/mockEvents.ts';

export const getRaceEvents = async (): Promise<RaceEvent[]> => {
  try {
    const response = await axiosInstance.get<RaceEvent[]>('/race-events');

    if (Array.isArray(response.data)) {
      return [...response.data].sort((a, b) => a.time - b.time);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('레이스 이벤트 API 호출 실패, mock 데이터를 사용합니다.', error);
    }
  }

  return [...mockRaceEvents].sort((a, b) => a.time - b.time);
};

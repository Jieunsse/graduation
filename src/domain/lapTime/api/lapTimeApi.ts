import axios from 'axios';
import type {
  LapTime,
  LapTimeApiResponse,
} from '@domain/lapTime/types/lapTime.ts';

const openF1Client = axios.create({
  baseURL: 'https://api.openf1.org/v1',
  timeout: 10000,
});

export const fetchLapTimes = async (sessionKey: number): Promise<LapTime[]> => {
  const { data } = await openF1Client.get<LapTimeApiResponse[]>('/laps', {
    params: { session_key: sessionKey },
  });

  return data
    .filter((item) => typeof item.lap_duration === 'number' && true)
    .map((item) => ({
      driver: item.driver_name?.trim() || `Driver ${item.driver_number}`,
      lap: item.lap_number,
      time: item.lap_duration ?? 0,
      isPitLap: Boolean(item.pit_in_time || item.pit_out_time),
      team: item.team_name?.trim() || 'Unknown',
    }))
    .sort((a, b) => a.lap - b.lap);
};

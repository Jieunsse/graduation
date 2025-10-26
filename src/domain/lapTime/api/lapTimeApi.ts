import axios from 'axios';
import type {
  DriverApiResponse,
  LapTime,
  LapTimeApiResponse,
} from '@domain/lapTime/types/lapTime.ts';

const openF1Client = axios.create({
  baseURL: 'https://api.openf1.org/v1',
  timeout: 10000,
});

const buildDriverNameMap = (drivers: DriverApiResponse[]) => {
  return drivers.reduce<Record<number, string>>((acc, driver) => {
    const name =
      driver.full_name?.trim() ||
      driver.broadcast_name?.trim() ||
      driver.driver_name?.trim();

    if (name) {
      acc[driver.driver_number] = name;
    }

    return acc;
  }, {});
};

export const fetchLapTimes = async (sessionKey: number): Promise<LapTime[]> => {
  const [{ data: laps }, { data: drivers }] = await Promise.all([
    openF1Client.get<LapTimeApiResponse[]>('/laps', {
      params: { session_key: sessionKey },
    }),
    openF1Client.get<DriverApiResponse[]>('/drivers', {
      params: { session_key: sessionKey },
    }),
  ]);

  const driverNameMap = buildDriverNameMap(drivers);

  return laps
    .filter((item) => typeof item.lap_duration === 'number' && item.lap_duration !== null)
    .map((item) => ({
      driver:
        driverNameMap[item.driver_number] ||
        item.driver_name?.trim() ||
        `Driver ${item.driver_number}`,
      lap: item.lap_number,
      time: item.lap_duration ?? 0,
      isPitLap: Boolean(item.pit_in_time || item.pit_out_time),
      team: item.team_name?.trim() || 'Unknown',
    }))
    .sort((a, b) => a.lap - b.lap);
};

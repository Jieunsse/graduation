import axios from 'axios';
import type {
  DriverApiResponse,
  LapTime,
  LapTimeApiResponse,
  RaceSession,
  RaceSessionApiResponse,
} from '@domain/lapTime/types/lapTime.ts';
import { driverNameMap } from '@domain/lapTime/data/driverNameMap.ts';

const openF1Client = axios.create({
  baseURL: 'https://api.openf1.org/v1',
  timeout: 10000,
});

const buildDriverMap = (drivers: DriverApiResponse[]) => {
  const map = new Map<number, { name?: string; team?: string }>();
  drivers.forEach((driver) => {
    // ① 영어 이름 우선 결정
    const englishName =
      driver.full_name?.trim() ||
      driver.broadcast_name?.trim() ||
      [driver.first_name, driver.last_name].filter(Boolean).join(' ').trim() ||
      driver.driver_name?.trim();

    // ② 한글 이름으로 매핑 (없으면 영어 그대로)
    const localizedName =
      (englishName && driverNameMap[englishName.toLowerCase()]) || englishName;

    const team = driver.team_name?.trim();

    map.set(driver.driver_number, {
      name:
        localizedName && localizedName.length > 0 ? localizedName : undefined,
      team: team && team.length > 0 ? team : undefined,
    });
  });
  return map;
};

const formatLocation = (session: RaceSessionApiResponse) => {
  const locationParts = [
    session.country_name ?? session.country ?? undefined,
    session.location ?? session.circuit_short_name ?? undefined,
  ].filter((part): part is string => Boolean(part));

  if (locationParts.length === 0) {
    return undefined;
  }

  return locationParts.join(' • ');
};

export const fetchLapTimes = async (sessionKey: number): Promise<LapTime[]> => {
  const [lapsResponse, driversResponse] = await Promise.all([
    openF1Client.get<LapTimeApiResponse[]>('/laps', {
      params: { session_key: sessionKey },
    }),
    openF1Client.get<DriverApiResponse[]>('/drivers', {
      params: { session_key: sessionKey },
    }),
  ]);

  const driverMap = buildDriverMap(driversResponse.data);

  return lapsResponse.data
    .filter((item) => typeof item.lap_duration === 'number')
    .map((item) => {
      const driverInfo = driverMap.get(item.driver_number);
      const driverName = driverInfo?.name || item.driver_name?.trim();
      const teamName = driverInfo?.team || item.team_name?.trim();

      return {
        driver:
          driverName && driverName.length > 0
            ? driverName
            : `Driver ${item.driver_number}`,
        lap: item.lap_number,
        time: item.lap_duration ?? 0,
        isPitLap: Boolean(item.pit_in_time || item.pit_out_time),
        team: teamName && teamName.length > 0 ? teamName : 'Unknown',
      } satisfies LapTime;
    })
    .sort((a, b) => a.lap - b.lap);
};

export const fetchRaceSessions = async (
  year: number
): Promise<RaceSession[]> => {
  const { data } = await openF1Client.get<RaceSessionApiResponse[]>(
    '/sessions',
    {
      params: {
        year,
        session_type: 'Race',
      },
    }
  );

  return data
    .filter(
      (session) =>
        (session.session_type ?? '').toLowerCase() === 'race' &&
        typeof session.session_key === 'number'
    )
    .map((session) => ({
      sessionKey: session.session_key,
      meetingName: session.meeting_name,
      sessionName: session.session_name,
      date: session.date_start ?? '',
      location: formatLocation(session),
    }))
    .sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
        return 0;
      }
      return bTime - aTime;
    });
};

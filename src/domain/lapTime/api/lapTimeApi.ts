import axios from 'axios';
import type {
  DriverApiResponse,
  LapTime,
  LapTimeApiResponse,
  RaceSession,
  SessionApiResponse,
} from '@domain/lapTime/types/lapTime.ts';

const openF1Client = axios.create({
  baseURL: 'https://api.openf1.org/v1',
  timeout: 10000,
});

const normalizeName = (value?: string | null) =>
  value?.trim().replace(/\s+/g, ' ') || '';

const buildDriverNameMap = (drivers: DriverApiResponse[]) => {
  return drivers.reduce<Record<number, string>>((acc, driver) => {
    const fullName = normalizeName(driver.full_name);
    const composedName = normalizeName(
      `${normalizeName(driver.first_name)} ${normalizeName(driver.last_name)}`.trim(),
    );
    const broadcast = normalizeName(driver.broadcast_name);
    const code = normalizeName(driver.driver_name);
    const acronym = normalizeName(driver.name_acronym);

    const preferredName =
      fullName ||
      composedName ||
      (broadcast ?
        broadcast
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())
      : '') ||
      code ||
      acronym;

    const driverNumber = Number(driver.driver_number);

    if (preferredName && Number.isFinite(driverNumber)) {
      acc[driverNumber] = preferredName;
    }

    return acc;
  }, {});
};

const buildLocationLabel = (session: SessionApiResponse) => {
  const parts = [normalizeName(session.country_name), normalizeName(session.circuit_short_name)];
  return parts.filter(Boolean).join(' • ') || undefined;
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

export const fetchRaceSessions = async (year: number): Promise<RaceSession[]> => {
  const { data } = await openF1Client.get<SessionApiResponse[]>('/sessions', {
    params: {
      year,
      session_type: 'Race',
      classification: false,
    },
  });

  return data
    .filter(
      (session) =>
        session.session_type?.toLowerCase() === 'race' &&
        Number.isFinite(session.session_key),
    )
    .map((session) => {
      const yearLabel = session.year?.toString() ?? '';
      const hasYearInName =
        yearLabel && session.meeting_name?.includes(yearLabel);
      const meetingName = hasYearInName
        ? session.meeting_name
        : `${yearLabel ? `${yearLabel} ` : ''}${session.meeting_name}`.trim();

      return {
        sessionKey: session.session_key,
        meetingName,
        sessionName: session.session_name,
        date: session.date_start,
        location: buildLocationLabel(session),
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

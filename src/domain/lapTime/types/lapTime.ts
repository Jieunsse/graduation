export interface LapTimeApiResponse {
  driver_number: number;
  lap_number: number;
  lap_duration: number | null;
  pit_in_time?: string | null;
  pit_out_time?: string | null;
  driver_name?: string | null;
  team_name?: string | null;
}

export interface DriverApiResponse {
  driver_number: number;
  driver_name?: string | null;
  team_name?: string | null;
}

export interface LapTime {
  driver: string;
  lap: number;
  time: number;
  isPitLap: boolean;
  team: string;
}

export type LapTimeUnit = 'seconds' | 'minutes';

export interface LapTimeFilters {
  includePitLaps: boolean;
  cutOffRatio: number;
  unit: LapTimeUnit;
  selectedDrivers: string[];
}

export interface RaceSession {
  sessionKey: number;
  meetingName: string;
  sessionName: string;
  date: string;
  location: string;
}

export interface RaceSessionApiResponse {
  session_key: number;
  meeting_name: string;
  session_name: string;
  session_type?: string | null;
  date_start?: string | null;
  country_name?: string | null;
  country?: string | null;
  location?: string | null;
  circuit_short_name?: string | null;
}

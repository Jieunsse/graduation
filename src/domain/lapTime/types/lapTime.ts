export interface LapTimeApiResponse {
  driver_number: number;
  lap_number: number;
  lap_duration: number | null;
  pit_in_time?: string | null;
  pit_out_time?: string | null;
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
  location?: string;
}

export interface SessionResult {
  position: number | null;
  driver_number: number;
  number_of_laps: number;
  points: number;
  dnf: boolean;
  dns: boolean;
  dsq: boolean;
  duration: number | null;
  gap_to_leader: string | number | null;
  meeting_key: number;
  session_key: number;
  driver_name?: string | null;
  team_name?: string | null;
  time?: string | null;
  status?: string | null;
}

export interface DriverInfo {
  driver_number: number;
  first_name?: string | null;
  last_name?: string | null;
  full_name?: string | null;
  broadcast_name?: string | null;
  driver_name?: string | null;
  country_code?: string | null;
  team_name?: string | null;
  picture?: string | null;
}

export interface MeetingInfo {
  meeting_key: number;
  country_name?: string;
  location?: string;
  circuit_name?: string;
  year?: number;
  official_name?: string;
  meeting_name?: string;
  start_date?: string;
}

export interface TeamStat {
  teamName: string;
  totalPoints: number;
  drivers: { driverNumber: number; name: string }[];
  finishers: number;
}

export interface RaceSessionMeta {
  meetingKey: number;
  sessionKey: number;
  grandPrix: string;
  themeColor: string;
  accentColor: string;
  heroImage: string;
}

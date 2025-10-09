import type { TrackInfo } from '@domain/calender/data/trackMap.ts';

export type CalenderSessionType =
  | 'practice1'
  | 'practice2'
  | 'practice3'
  | 'qualifying'
  | 'sprint'
  | 'sprintShootout'
  | 'race';

export interface CalenderSession {
  type: CalenderSessionType;
  label: string;
  start: string;
  end: string;
}

export interface CalenderEvent {
  slug: TrackInfo['slug'];
  round: number;
  country: string;
  locality: string;
  flag: string;
  eventName: string;
  circuit: string;
  timeZone: string;
  offset: number;
  raceStart: string;
  raceEnd: string;
  startDate: string;
  endDate: string;
  sessions: CalenderSession[];
}

type LocalDateInput = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
};

type SessionTemplate = {
  type: CalenderSessionType;
  label: string;
  localTime: LocalDateInput;
  durationMinutes: number;
};

const toUtcIsoString = (local: LocalDateInput, offset: number) => {
  const minutes = local.minute ?? 0;
  const date = new Date(
    Date.UTC(
      local.year,
      local.month - 1,
      local.day,
      local.hour - offset,
      minutes
    )
  );

  return date.toISOString();
};

const addMinutes = (iso: string, duration: number) => {
  const date = new Date(iso);
  date.setMinutes(date.getMinutes() + duration);
  return date.toISOString();
};

const createSessions = (sessions: SessionTemplate[], offset: number) =>
  sessions.map((session) => {
    const start = toUtcIsoString(session.localTime, offset);
    return {
      type: session.type,
      label: session.label,
      start,
      end: addMinutes(start, session.durationMinutes),
    } satisfies CalenderSession;
  });

interface CreateEventParams {
  slug: TrackInfo['slug'];
  round: number;
  country: string;
  locality: string;
  flag: string;
  circuit: string;
  eventName: string;
  timeZone: string;
  offset: number;
  sessions: SessionTemplate[];
}

const createEvent = (params: CreateEventParams): CalenderEvent => {
  const sessions = createSessions(params.sessions, params.offset);
  const race = sessions.find((session) => session.type === 'race');

  if (!race) {
    throw new Error(`Race session missing for ${params.slug}`);
  }

  return {
    slug: params.slug,
    round: params.round,
    country: params.country,
    locality: params.locality,
    flag: params.flag,
    circuit: params.circuit,
    eventName: params.eventName,
    timeZone: params.timeZone,
    offset: params.offset,
    raceStart: race.start,
    raceEnd: race.end,
    startDate: sessions[0]?.start ?? race.start,
    endDate: race.end,
    sessions,
  };
};

export const CalenderEvents: CalenderEvent[] = [
  createEvent({
    slug: 'australian-grand-prix',
    round: 1,
    country: 'Australia',
    locality: 'Melbourne',
    flag: '🇦🇺',
    circuit: 'Albert Park Circuit',
    eventName: '2025 Australian Grand Prix',
    timeZone: 'Australia/Melbourne',
    offset: 11,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 3, day: 14, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 3, day: 14, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 3, day: 15, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 3, day: 15, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 3, day: 16, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'chinese-grand-prix',
    round: 2,
    country: 'China',
    locality: 'Shanghai',
    flag: '🇨🇳',
    circuit: 'Shanghai International Circuit',
    eventName: '2025 Chinese Grand Prix',
    timeZone: 'Asia/Shanghai',
    offset: 8,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 3, day: 21, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 3, day: 21, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 3, day: 22, hour: 12, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 3, day: 22, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 3, day: 23, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'japanese-grand-prix',
    round: 3,
    country: 'Japan',
    locality: 'Suzuka',
    flag: '🇯🇵',
    circuit: 'Suzuka International Racing Course',
    eventName: '2025 Japanese Grand Prix',
    timeZone: 'Asia/Tokyo',
    offset: 9,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 4, day: 4, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 4, day: 4, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 4, day: 5, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 4, day: 5, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 4, day: 6, hour: 14, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'bahrain-grand-prix',
    round: 4,
    country: 'Bahrain',
    locality: 'Sakhir',
    flag: '🇧🇭',
    circuit: 'Bahrain International Circuit',
    eventName: '2025 Bahrain Grand Prix',
    timeZone: 'Asia/Bahrain',
    offset: 3,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 4, day: 11, hour: 14, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 4, day: 11, hour: 18, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 4, day: 12, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 4, day: 12, hour: 18, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 4, day: 13, hour: 18, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'saudi-arabian-grand-prix',
    round: 5,
    country: 'Saudi Arabia',
    locality: 'Jeddah',
    flag: '🇸🇦',
    circuit: 'Jeddah Corniche Circuit',
    eventName: '2025 Saudi Arabian Grand Prix',
    timeZone: 'Asia/Riyadh',
    offset: 3,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 4, day: 18, hour: 16, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 4, day: 18, hour: 20, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 4, day: 19, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 4, day: 19, hour: 20, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 4, day: 20, hour: 20, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'miami-grand-prix',
    round: 6,
    country: 'United States',
    locality: 'Miami',
    flag: '🇺🇸',
    circuit: 'Miami International Autodrome',
    eventName: '2025 Miami Grand Prix',
    timeZone: 'America/New_York',
    offset: -4,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 5, day: 2, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 5, day: 2, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 5, day: 3, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 5, day: 3, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 5, day: 4, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'emilia-romagna-grand-prix',
    round: 7,
    country: 'Italy',
    locality: 'Imola',
    flag: '🇮🇹',
    circuit: 'Autodromo Enzo e Dino Ferrari',
    eventName: '2025 Emilia Romagna Grand Prix',
    timeZone: 'Europe/Rome',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 5, day: 16, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 5, day: 16, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 5, day: 17, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 5, day: 17, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 5, day: 18, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'monaco-grand-prix',
    round: 8,
    country: 'Monaco',
    locality: 'Monte Carlo',
    flag: '🇲🇨',
    circuit: 'Circuit de Monaco',
    eventName: '2025 Monaco Grand Prix',
    timeZone: 'Europe/Monaco',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 5, day: 23, hour: 13, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 5, day: 23, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 5, day: 24, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 5, day: 24, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 5, day: 25, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'spanish-grand-prix',
    round: 9,
    country: 'Spain',
    locality: 'Barcelona',
    flag: '🇪🇸',
    circuit: 'Circuit de Barcelona-Catalunya',
    eventName: '2025 Spanish Grand Prix',
    timeZone: 'Europe/Madrid',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 5, day: 30, hour: 13, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 5, day: 30, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 5, day: 31, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 5, day: 31, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 6, day: 1, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'canadian-grand-prix',
    round: 10,
    country: 'Canada',
    locality: 'Montreal',
    flag: '🇨🇦',
    circuit: 'Circuit Gilles Villeneuve',
    eventName: '2025 Canadian Grand Prix',
    timeZone: 'America/Toronto',
    offset: -4,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 6, day: 13, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 6, day: 13, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 6, day: 14, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 6, day: 14, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 6, day: 15, hour: 14, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'austrian-grand-prix',
    round: 11,
    country: 'Austria',
    locality: 'Spielberg',
    flag: '🇦🇹',
    circuit: 'Red Bull Ring',
    eventName: '2025 Austrian Grand Prix',
    timeZone: 'Europe/Vienna',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 6, day: 27, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 6, day: 27, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 6, day: 28, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 6, day: 28, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 6, day: 29, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'british-grand-prix',
    round: 12,
    country: 'United Kingdom',
    locality: 'Silverstone',
    flag: '🇬🇧',
    circuit: 'Silverstone Circuit',
    eventName: '2025 British Grand Prix',
    timeZone: 'Europe/London',
    offset: 1,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 7, day: 4, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 7, day: 4, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 7, day: 5, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 7, day: 5, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 7, day: 6, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'hungarian-grand-prix',
    round: 13,
    country: 'Hungary',
    locality: 'Budapest',
    flag: '🇭🇺',
    circuit: 'Hungaroring',
    eventName: '2025 Hungarian Grand Prix',
    timeZone: 'Europe/Budapest',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 7, day: 18, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 7, day: 18, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 7, day: 19, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 7, day: 19, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 7, day: 20, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'belgian-grand-prix',
    round: 14,
    country: 'Belgium',
    locality: 'Spa-Francorchamps',
    flag: '🇧🇪',
    circuit: 'Circuit de Spa-Francorchamps',
    eventName: '2025 Belgian Grand Prix',
    timeZone: 'Europe/Brussels',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 7, day: 25, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 7, day: 25, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 7, day: 26, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 7, day: 26, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 7, day: 27, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'dutch-grand-prix',
    round: 15,
    country: 'Netherlands',
    locality: 'Zandvoort',
    flag: '🇳🇱',
    circuit: 'Circuit Zandvoort',
    eventName: '2025 Dutch Grand Prix',
    timeZone: 'Europe/Amsterdam',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 8, day: 29, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 8, day: 29, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 8, day: 30, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 8, day: 30, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 8, day: 31, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'italian-grand-prix',
    round: 16,
    country: 'Italy',
    locality: 'Monza',
    flag: '🇮🇹',
    circuit: 'Autodromo Nazionale Monza',
    eventName: '2025 Italian Grand Prix',
    timeZone: 'Europe/Rome',
    offset: 2,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 9, day: 5, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 9, day: 5, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 9, day: 6, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 9, day: 6, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 9, day: 7, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'azerbaijan-grand-prix',
    round: 17,
    country: 'Azerbaijan',
    locality: 'Baku',
    flag: '🇦🇿',
    circuit: 'Baku City Circuit',
    eventName: '2025 Azerbaijan Grand Prix',
    timeZone: 'Asia/Baku',
    offset: 4,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 9, day: 19, hour: 13, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 9, day: 19, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 9, day: 20, hour: 13, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 9, day: 20, hour: 17, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 9, day: 21, hour: 15, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'singapore-grand-prix',
    round: 18,
    country: 'Singapore',
    locality: 'Marina Bay',
    flag: '🇸🇬',
    circuit: 'Marina Bay Street Circuit',
    eventName: '2025 Singapore Grand Prix',
    timeZone: 'Asia/Singapore',
    offset: 8,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 10, day: 3, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 10, day: 3, hour: 20, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 10, day: 4, hour: 17, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 10, day: 4, hour: 21, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 10, day: 5, hour: 20, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'united-states-grand-prix',
    round: 19,
    country: 'United States',
    locality: 'Austin',
    flag: '🇺🇸',
    circuit: 'Circuit of The Americas',
    eventName: '2025 United States Grand Prix',
    timeZone: 'America/Chicago',
    offset: -5,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 10, day: 17, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 10, day: 17, hour: 16, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 10, day: 18, hour: 12, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 10, day: 18, hour: 16, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 10, day: 19, hour: 14, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'mexico-city-grand-prix',
    round: 20,
    country: 'Mexico',
    locality: 'Mexico City',
    flag: '🇲🇽',
    circuit: 'Autódromo Hermanos Rodríguez',
    eventName: '2025 Mexico City Grand Prix',
    timeZone: 'America/Mexico_City',
    offset: -5,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 10, day: 24, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 10, day: 24, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 10, day: 25, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 10, day: 25, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 10, day: 26, hour: 14, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'saopaulo-grand-prix',
    round: 21,
    country: 'Brazil',
    locality: 'São Paulo',
    flag: '🇧🇷',
    circuit: 'Autódromo José Carlos Pace',
    eventName: '2025 São Paulo Grand Prix',
    timeZone: 'America/Sao_Paulo',
    offset: -3,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 11, day: 7, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 11, day: 7, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 11, day: 8, hour: 11, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 11, day: 8, hour: 15, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 11, day: 9, hour: 14, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'las-vegas-grand-prix',
    round: 22,
    country: 'United States',
    locality: 'Las Vegas',
    flag: '🇺🇸',
    circuit: 'Las Vegas Strip Circuit',
    eventName: '2025 Las Vegas Grand Prix',
    timeZone: 'America/Los_Angeles',
    offset: -7,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 11, day: 20, hour: 20, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 11, day: 21, hour: 0, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 11, day: 21, hour: 20, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 11, day: 22, hour: 0, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 11, day: 22, hour: 22, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'qatar-grand-prix',
    round: 23,
    country: 'Qatar',
    locality: 'Lusail',
    flag: '🇶🇦',
    circuit: 'Lusail International Circuit',
    eventName: '2025 Qatar Grand Prix',
    timeZone: 'Asia/Qatar',
    offset: 3,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 11, day: 28, hour: 16, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 11, day: 28, hour: 20, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 11, day: 29, hour: 17, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 11, day: 29, hour: 20, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 11, day: 30, hour: 20, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
  createEvent({
    slug: 'abu-dhabi-grand-prix',
    round: 24,
    country: 'United Arab Emirates',
    locality: 'Abu Dhabi',
    flag: '🇦🇪',
    circuit: 'Yas Marina Circuit',
    eventName: '2025 Abu Dhabi Grand Prix',
    timeZone: 'Asia/Dubai',
    offset: 4,
    sessions: [
      {
        type: 'practice1',
        label: '프랙티스 1',
        localTime: { year: 2025, month: 12, day: 5, hour: 14, minute: 30 },
        durationMinutes: 60,
      },
      {
        type: 'practice2',
        label: '프랙티스 2',
        localTime: { year: 2025, month: 12, day: 5, hour: 18, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'practice3',
        label: '프랙티스 3',
        localTime: { year: 2025, month: 12, day: 6, hour: 15, minute: 0 },
        durationMinutes: 60,
      },
      {
        type: 'qualifying',
        label: '퀄리파잉',
        localTime: { year: 2025, month: 12, day: 6, hour: 18, minute: 0 },
        durationMinutes: 90,
      },
      {
        type: 'race',
        label: '레이스',
        localTime: { year: 2025, month: 12, day: 7, hour: 17, minute: 0 },
        durationMinutes: 120,
      },
    ],
  }),
];

export const findCalenderEvent = (slug: string) =>
  CalenderEvents.find((event) => event.slug === slug);

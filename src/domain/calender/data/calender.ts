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
    country: '호주',
    locality: '멜버른',
    flag: '🇦🇺',
    circuit: '알버트 파크 서킷',
    eventName: '2025 호주 그랑프리',
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
    country: '중국',
    locality: '상하이',
    flag: '🇨🇳',
    circuit: '상하이 국제 서킷',
    eventName: '2025 중국 그랑프리',
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
    country: '일본',
    locality: '스즈카',
    flag: '🇯🇵',
    circuit: '스즈카 국제 레이싱 서킷',
    eventName: '2025 일본 그랑프리',
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
    country: '바레인',
    locality: '사키르',
    flag: '🇧🇭',
    circuit: '바레인 국제 서킷',
    eventName: '2025 바레인 그랑프리',
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
    country: '사우디아라비아',
    locality: '제다',
    flag: '🇸🇦',
    circuit: '제다 코니체 서킷',
    eventName: '2025 사우디아라비아 그랑프리',
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
    country: '미국',
    locality: '마이애미',
    flag: '🇺🇸',
    circuit: '마이에미 국제 오토드롬 서킷',
    eventName: '2025 마이애미 그랑프리',
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
    country: '이탈리아',
    locality: '이몰라',
    flag: '🇮🇹',
    circuit: '엔초 에 디노 페라리 서킷',
    eventName: '2025 에밀리아 로마냐 그랑프리',
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
    country: '모나코',
    locality: '몬테 카를로',
    flag: '🇲🇨',
    circuit: '모나코 서킷',
    eventName: '2025 모나코 그랑프리',
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
    country: '스페인',
    locality: '바르셀로나',
    flag: '🇪🇸',
    circuit: '바르셀로나-카탈루냐 서킷',
    eventName: '2025 스페인 그랑프리',
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
    country: '캐나다',
    locality: '몬테리올',
    flag: '🇨🇦',
    circuit: '질 빌뇌브 서킷',
    eventName: '2025 캐나다 그랑프리',
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
    country: '오스트리아',
    locality: '슈필베르크',
    flag: '🇦🇹',
    circuit: '레드불 링 서킷',
    eventName: '2025 오스트리아 그랑프리',
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
    country: '영국',
    locality: '실버스톤',
    flag: '🇬🇧',
    circuit: '실버스톤 서킷',
    eventName: '2025 영국 그랑프리',
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
    country: '헝가리',
    locality: '부다페스트',
    flag: '🇭🇺',
    circuit: '헝가로링 서킷',
    eventName: '2025 헝가리 그랑프리',
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
    country: '벨기에',
    locality: '스파-프랑코르샹',
    flag: '🇧🇪',
    circuit: '스파-프랑코르샹 서킷',
    eventName: '2025 벨기에 그랑프리',
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
    country: '네덜란드',
    locality: '잔드보르트',
    flag: '🇳🇱',
    circuit: '잔드보르트 서킷',
    eventName: '2025 네덜란드 그랑프리',
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
    country: '이탈리아',
    locality: '몬차',
    flag: '🇮🇹',
    circuit: '몬차 국립 자동차경주장',
    eventName: '2025 이탈리아 그랑프리',
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
    country: '아제르바이잔',
    locality: '바쿠',
    flag: '🇦🇿',
    circuit: '바쿠 시티 서킷',
    eventName: '2025 아제르바이잔 그랑프리',
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
    country: '싱가포르',
    locality: '마리나 베이',
    flag: '🇸🇬',
    circuit: '마리나 베이 스트리트 서킷',
    eventName: '2025 싱가포르 그랑프리',
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
    country: '미국',
    locality: '오스틴',
    flag: '🇺🇸',
    circuit: '서킷 오브 더 아메리카스',
    eventName: '2025 미국 그랑프리',
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
    country: '멕시코',
    locality: '멕시코시티',
    flag: '🇲🇽',
    circuit: '에르마노스 로드리게스 서킷',
    eventName: '2025 멕시코시티 그랑프리',
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
    country: '브라질',
    locality: '상파울루',
    flag: '🇧🇷',
    circuit: '인터라고스 서킷 (조제 카를루스 파체 서킷)',
    eventName: '2025 상파울루 그랑프리',
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
    country: '미국',
    locality: '라스베이거스',
    flag: '🇺🇸',
    circuit: '라스베이거스 스트립 서킷',
    eventName: '2025 라스베이거스 그랑프리',
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
    country: '카타르',
    locality: '루사일',
    flag: '🇶🇦',
    circuit: '루사일 국제 서킷',
    eventName: '2025 카타르 그랑프리',
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
    country: '아랍에미리트',
    locality: '아부다비',
    flag: '🇦🇪',
    circuit: '야스 마리나 서킷',
    eventName: '2025 아부다비 그랑프리',
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

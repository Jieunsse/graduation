import {
  CalenderEvents,
  type CalenderEvent,
} from '@domain/calender/data/calender.ts';

export type WeatherSession = {
  label: string;
  time: string;
  airTemp: number;
  trackTemp: number;
  humidity: number;
  windSpeed: number;
  rainChance: number;
  condition: string;
};

export type WeatherReport = {
  slug: string;
  round: number;
  eventName: string;
  country: string;
  locality: string;
  raceDate: string;
  isUpcoming: boolean;
  summary: string;
  status: string;
  condition: string;
  airTemp: number;
  trackTemp: number;
  humidity: number;
  rainChance: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
  sessions: WeatherSession[];
};

type WeatherTemplate = {
  condition: string;
  status: string;
  airTemp: number;
  trackTemp: number;
  humidity: number;
  rainChance: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
};

const weatherTemplates: Record<string, WeatherTemplate> = {
  'australian-grand-prix': {
    condition: '맑음',
    status: '건조한 노면, 고온',
    airTemp: 24,
    trackTemp: 38,
    humidity: 46,
    rainChance: 8,
    pressure: 1014,
    windSpeed: 18,
    windDirection: '남서풍',
  },
  'chinese-grand-prix': {
    condition: '부분적으로 흐림',
    status: '약한 안개와 구름',
    airTemp: 19,
    trackTemp: 32,
    humidity: 58,
    rainChance: 22,
    pressure: 1011,
    windSpeed: 14,
    windDirection: '북동풍',
  },
  'japanese-grand-prix': {
    condition: '흐림',
    status: '짙은 구름과 서늘한 공기',
    airTemp: 17,
    trackTemp: 26,
    humidity: 64,
    rainChance: 34,
    pressure: 1008,
    windSpeed: 20,
    windDirection: '북서풍',
  },
  'bahrain-grand-prix': {
    condition: '쾌청',
    status: '건조하고 바람 약함',
    airTemp: 27,
    trackTemp: 42,
    humidity: 32,
    rainChance: 2,
    pressure: 1010,
    windSpeed: 12,
    windDirection: '북풍',
  },
  'italian-grand-prix': {
    condition: '맑음',
    status: '안정적인 고기압',
    airTemp: 22,
    trackTemp: 37,
    humidity: 48,
    rainChance: 15,
    pressure: 1016,
    windSpeed: 10,
    windDirection: '동풍',
  },
  'british-grand-prix': {
    condition: '소나기',
    status: '구름 많고 변덕스러운 바람',
    airTemp: 16,
    trackTemp: 24,
    humidity: 71,
    rainChance: 52,
    pressure: 1005,
    windSpeed: 22,
    windDirection: '서풍',
  },
  'qatar-grand-prix': {
    condition: '짙은 안개',
    status: '미세먼지와 건조',
    airTemp: 29,
    trackTemp: 44,
    humidity: 28,
    rainChance: 4,
    pressure: 1007,
    windSpeed: 16,
    windDirection: '북동풍',
  },
};

const defaultTemplate: WeatherTemplate = {
  condition: '맑음',
  status: '안정적인 컨디션',
  airTemp: 23,
  trackTemp: 35,
  humidity: 52,
  rainChance: 18,
  pressure: 1013,
  windSpeed: 13,
  windDirection: '남동풍',
};

const deriveSessionWeather = (
  sessionType: string,
  base: WeatherTemplate
): WeatherSession => {
  const modifiers: Record<string, number> = {
    practice1: -1,
    practice2: 0,
    practice3: -2,
    qualifying: 1,
    sprintShootout: 1,
    sprint: 0,
    race: 1,
  };

  const delta = modifiers[sessionType] ?? 0;
  const windVariation = sessionType === 'race' ? 3 : 1;
  const humidityAdjustment = sessionType === 'race' ? 2 : 0;

  return {
    label: sessionType,
    time: '',
    airTemp: base.airTemp + delta,
    trackTemp: base.trackTemp + delta * 1.5,
    humidity: Math.min(100, base.humidity + humidityAdjustment),
    windSpeed: base.windSpeed + windVariation,
    rainChance: Math.min(100, Math.max(0, base.rainChance + delta * 2)),
    condition: base.condition,
  };
};

const normalizeSessionLabel = (label: string) => {
  const map: Record<string, string> = {
    practice1: '프랙티스 1',
    practice2: '프랙티스 2',
    practice3: '프랙티스 3',
    sprintShootout: '스프린트 슈트아웃',
    sprint: '스프린트',
    qualifying: '퀄리파잉',
    race: '레이스',
  };

  return map[label] ?? label;
};

const createWeatherReport = (event: CalenderEvent): WeatherReport => {
  const base = weatherTemplates[event.slug] ?? defaultTemplate;
  const raceDate = event.raceStart;
  const now = Date.now();
  const raceTimestamp = new Date(raceDate).getTime();
  const isUpcoming = !Number.isNaN(raceTimestamp) && raceTimestamp > now;

  const sessions: WeatherSession[] = event.sessions.map((session) => {
    const weather = deriveSessionWeather(session.type, base);
    return {
      ...weather,
      label: normalizeSessionLabel(session.type),
      time: session.start,
    };
  });

  return {
    slug: event.slug,
    round: event.round,
    eventName: event.eventName,
    country: event.country,
    locality: event.locality,
    raceDate,
    isUpcoming,
    summary: `${base.condition} · 체감 ${base.airTemp}℃`,
    status: base.status,
    condition: base.condition,
    airTemp: base.airTemp,
    trackTemp: base.trackTemp,
    humidity: base.humidity,
    rainChance: base.rainChance,
    pressure: base.pressure,
    windSpeed: base.windSpeed,
    windDirection: base.windDirection,
    sessions,
  };
};

export const WeatherReports: WeatherReport[] = CalenderEvents.map((event) =>
  createWeatherReport(event)
);

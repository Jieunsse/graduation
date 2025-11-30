import React from 'react';
import { WeatherReport } from '@domain/weather/data/weatherMock.ts';
import * as styles from '@domain/weather/styles/weatherPage.css.ts';

const formatDateTime = (iso: string) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  return date.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  });
};

interface WeatherHeroProps {
  nextEvent: WeatherReport;
}

export const WeatherHero = ({ nextEvent }: WeatherHeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.heroBadge}>다음 예정된 경기</p>
        <h1 className={styles.heroTitle}>F1 트랙 사이드 날씨 센터</h1>
        <p className={styles.heroSubtitle}>
          openf1 weather API 응답 스키마를 바탕으로 만든 목업 데이터입니다.
          주말 일정에 맞춰 기온, 노면 상태, 강수 확률을 한눈에 확인하세요.
        </p>

        <div className={styles.heroMeta}>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>라운드</span>
            <span className={styles.metaValue}>Round {nextEvent.round}</span>
            <span className={styles.metaSub}>{nextEvent.eventName}</span>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>시간</span>
            <span className={styles.metaValue}>{formatDateTime(nextEvent.raceDate)}</span>
            <span className={styles.metaSub}>
              {nextEvent.country} · {nextEvent.locality}
            </span>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>상태</span>
            <span className={styles.metaValue}>{nextEvent.summary}</span>
            <span className={styles.metaSub}>{nextEvent.status}</span>
          </div>
        </div>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.heroHighlight}>{nextEvent.condition ?? nextEvent.summary}</div>
        <p className={styles.heroStatus}>{nextEvent.status}</p>
        <div className={styles.heroMeta} style={{ marginTop: 0 }}>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>기온 / 노면</span>
            <span className={styles.metaValue}>
              {nextEvent.airTemp}℃ / {nextEvent.trackTemp}℃
            </span>
            <span className={styles.metaSub}>체감 {nextEvent.summary}</span>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>강수 확률</span>
            <span className={styles.metaValue}>{nextEvent.rainChance}%</span>
            <span className={styles.metaSub}>압력 {nextEvent.pressure} hPa</span>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>풍향 · 풍속</span>
            <span className={styles.metaValue}>
              {nextEvent.windDirection} / {nextEvent.windSpeed} km/h
            </span>
            <span className={styles.metaSub}>타이어 전략 참고용</span>
          </div>
        </div>
      </div>
    </section>
  );
};

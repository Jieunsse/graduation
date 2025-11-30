import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import {
  WeatherReports,
  type WeatherReport,
} from '@domain/weather/data/weatherMock.ts';
import * as styles from '@domain/weather/styles/weatherPage.css.ts';
import { WeatherHero } from '@domain/weather/components/WeatherHero.tsx';

interface WeatherPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const formatDate = (iso: string) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  return date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timeZone: 'Asia/Seoul',
  });
};

const formatTime = (iso: string) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  return date.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  });
};

const findNextEvent = (reports: WeatherReport[]) => {
  const now = Date.now();
  return (
    reports.find((report) => {
      const race = new Date(report.raceDate).getTime();
      return !Number.isNaN(race) && race > now;
    }) ?? reports[reports.length - 1]
  );
};

export const WeatherPage = ({ appearance, setAppearance }: WeatherPageProps) => {
  const sortedReports = useMemo(
    () => [...WeatherReports].sort((a, b) => a.round - b.round),
    []
  );
  const nextEvent = useMemo(
    () => findNextEvent(sortedReports),
    [sortedReports]
  );

  const [selectedSlug, setSelectedSlug] = useState<string>(
    nextEvent?.slug ?? sortedReports[0]?.slug ?? ''
  );

  const selectedEvent = useMemo(
    () => sortedReports.find((report) => report.slug === selectedSlug),
    [sortedReports, selectedSlug]
  );

  const pastReports = useMemo(() => {
    const now = Date.now();
    return sortedReports
      .filter((report) => new Date(report.raceDate).getTime() <= now)
      .sort((a, b) => b.round - a.round);
  }, [sortedReports]);

  const historyOptions = pastReports.length > 0 ? pastReports : sortedReports;

  const [historySlug, setHistorySlug] = useState<string>(
    pastReports[0]?.slug ?? sortedReports[0]?.slug ?? ''
  );

  const historyEvent = useMemo(
    () => sortedReports.find((report) => report.slug === historySlug),
    [sortedReports, historySlug]
  );

  useEffect(() => {
    if (!historyOptions.find((report) => report.slug === historySlug)) {
      const fallback = historyOptions[0];
      if (fallback) {
        setHistorySlug(fallback.slug);
      }
    }
  }, [historyOptions, historySlug]);

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />
      <div className={styles.page}>
        {nextEvent ? <WeatherHero nextEvent={nextEvent} /> : null}

        <div className={styles.layout}>
          <aside className={styles.sectionCard}>
            <div>
              <h2 className={styles.sectionTitle}>경기별 날씨</h2>
              <p className={styles.description}>
                캘린더 일정과 동일하게 라운드 순으로 정렬한 날씨 목록입니다.
                원하는 경기를 선택하면 세션별 기온과 노면 컨디션을 확인할 수
                있습니다.
              </p>
            </div>
            <div className={styles.eventList}>
              {sortedReports.map((report) => {
                const isActive = report.slug === selectedSlug;
                const badgeText = report.isUpcoming ? '예정' : '완료';

                return (
                  <button
                    key={report.slug}
                    type="button"
                    className={`${styles.eventButton} ${
                      isActive ? styles.activeEvent : ''
                    }`}
                    onClick={() => setSelectedSlug(report.slug)}
                  >
                    <span className={styles.eventLabel}>
                      <span className={styles.eventName}>{report.eventName}</span>
                      <span className={styles.eventMeta}>
                        Round {report.round} · {formatDate(report.raceDate)}
                      </span>
                    </span>
                    <span className={styles.badge}>{badgeText}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className={styles.detailCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h2 className={styles.sectionTitle}>
                  {selectedEvent?.eventName ?? '날씨 정보'}
                </h2>
                <p className={styles.description}>
                  {selectedEvent
                    ? `${selectedEvent.country} · ${selectedEvent.locality} | ${formatDate(selectedEvent.raceDate)}`
                    : '경기를 선택해 세션별 데이터를 확인하세요.'}
                </p>
              </div>
              <span className={styles.badge}>
                {selectedEvent?.isUpcoming ? '예정' : '완료'}
              </span>
            </div>

            {selectedEvent ? (
              <>
                <div className={styles.statsGrid}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>기온 / 노면</span>
                    <div className={styles.statValue}>
                      {selectedEvent.airTemp}℃ / {selectedEvent.trackTemp}℃
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>습도</span>
                    <div className={styles.statValue}>{selectedEvent.humidity}%</div>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>강수 확률</span>
                    <div className={styles.statValue}>{selectedEvent.rainChance}%</div>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>기압</span>
                    <div className={styles.statValue}>{selectedEvent.pressure} hPa</div>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>풍향 · 풍속</span>
                    <div className={styles.statValue}>
                      {selectedEvent.windDirection} / {selectedEvent.windSpeed} km/h
                    </div>
                  </div>
                </div>

                <div className={styles.sessionList}>
                  {selectedEvent.sessions.map((session) => (
                    <div key={session.label + session.time} className={styles.sessionRow}>
                      <div>
                        <div className={styles.sessionTitle}>{session.label}</div>
                        <div className={styles.eventMeta}>{formatTime(session.time)}</div>
                      </div>
                      <div className={styles.sessionMeta}>
                        <span className={styles.chip}>{session.condition}</span>
                        <span className={styles.chip}>
                          {session.airTemp}℃ / {session.trackTemp}℃
                        </span>
                        <span className={styles.chip}>습도 {session.humidity}%</span>
                        <span className={styles.chip}>강수 {session.rainChance}%</span>
                        <span className={styles.chip}>풍속 {session.windSpeed} km/h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </section>
        </div>

        <section className={styles.sectionCard}>
          <div>
            <h2 className={styles.sectionTitle}>지난 경기 날씨 기록</h2>
            <p className={styles.description}>
              원하는 라운드를 선택하면 레이스 당일 컨디션을 요약해서 보여줍니다.
              실제 API 대신 캘린더 일정과 장소를 기준으로 생성한 목업입니다.
            </p>
          </div>

          <div className={styles.historyControl}>
            <select
              className={styles.select}
              value={historySlug}
              onChange={(event) => setHistorySlug(event.target.value)}
            >
              {historyOptions.map((report) => (
                <option key={report.slug} value={report.slug}>
                  Round {report.round} · {report.eventName}
                </option>
              ))}
            </select>

            {historyEvent ? (
              <div className={styles.historyCard}>
                <h3 className={styles.historyTitle}>{historyEvent.eventName}</h3>
                <p className={styles.historyMeta}>
                  {historyEvent.country} · {historyEvent.locality} |{' '}
                  {formatDate(historyEvent.raceDate)}
                </p>
                <div className={styles.historyStats}>
                  <span className={styles.chip}>
                    상태: {historyEvent.summary}
                  </span>
                  <span className={styles.chip}>
                    기온 {historyEvent.airTemp}℃ / 노면 {historyEvent.trackTemp}℃
                  </span>
                  <span className={styles.chip}>강수 {historyEvent.rainChance}%</span>
                  <span className={styles.chip}>
                    풍향 {historyEvent.windDirection} · {historyEvent.windSpeed} km/h
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
      <Footer />
    </MainContainer>
  );
};

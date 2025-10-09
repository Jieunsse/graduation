import React from 'react';
import { EventIcon } from './EventIcon.tsx';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEvent } from '../types/raceEvent.ts';
import { raceEventTypeLabel } from '../types/raceEvent.ts';

interface EventCardProps {
  activeEvent?: RaceEvent;
  upcomingEvents: RaceEvent[];
  currentTime: number;
}

const formatRaceTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remaining
    .toString()
    .padStart(2, '0')}`;
};

export const EventCard = ({ activeEvent, upcomingEvents, currentTime }: EventCardProps) => {
  if (!activeEvent) {
    return (
      <div className={styles.eventPanel}>
        <div className={styles.eventHeader}>
          <h2 className={styles.eventTitle}>
            <EventIcon type="SAFETY_CAR" size="medium" ariaLabel="대기" />
            타임라인을 탐색해보세요
          </h2>
          <p className={styles.eventMeta}>
            현재 재생 위치 <strong>{formatRaceTime(Math.max(currentTime, 0))}</strong>
          </p>
        </div>
        <p className={styles.eventDescription}>
          좌우 드래그 또는 마우스 휠을 사용해 시간축을 이동하면 각 랩에서 벌어진
          주요 순간을 확인할 수 있습니다.
        </p>
        <div className={styles.emptyState}>
          재생을 시작하거나 슬라이더를 이동해 이벤트를 탐색해보세요.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.eventPanel}>
      <div className={styles.eventHeader}>
        <h2 className={styles.eventTitle}>
          <EventIcon type={activeEvent.type} size="medium" ariaLabel={raceEventTypeLabel[activeEvent.type]} />
          {raceEventTypeLabel[activeEvent.type]}
        </h2>
        <div className={styles.eventMeta}>
          <span>랩 {activeEvent.lap}랩</span>
          <span>타이밍 {formatRaceTime(activeEvent.time)}</span>
          {activeEvent.position ? <span>포지션 P{activeEvent.position}</span> : null}
          {activeEvent.team ? <span>{activeEvent.team}</span> : null}
        </div>
      </div>

      <p className={styles.eventDescription}>{activeEvent.description}</p>

      {activeEvent.relatedDrivers && activeEvent.relatedDrivers.length > 0 ? (
        <div className={styles.relatedDrivers}>
          관련 드라이버
          {activeEvent.relatedDrivers.map((driver) => (
            <span key={driver} className={styles.relatedBadge}>
              {driver}
            </span>
          ))}
        </div>
      ) : null}

      {upcomingEvents.length > 0 ? (
        <>
          <div className={styles.lightDivider} aria-hidden />
          <div>
            <h3 className={styles.surfaceTitle}>다음 이벤트</h3>
            <div className={styles.upcomingList}>
              {upcomingEvents.slice(0, 3).map((event) => (
                <div key={event.id} className={styles.upcomingItem}>
                  <EventIcon
                    type={event.type}
                    size="small"
                    ariaLabel={raceEventTypeLabel[event.type]}
                  />
                  <div className={styles.upcomingMeta}>
                    <span>
                      {raceEventTypeLabel[event.type]} · 랩 {event.lap}
                    </span>
                    <span>{formatRaceTime(event.time)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

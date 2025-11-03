import { EventIcon } from './EventIcon.tsx';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEvent, RaceEventType } from '../types/raceEvent.ts';
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

const badgeIcons: Record<RaceEventType, string> = {
  OVERTAKE: '↗',
  CRASH: '✕',
  PIT_STOP: '🛠',
  SAFETY_CAR: '⚠',
  RED_FLAG: '⛔',
};

export const EventCard = ({
  activeEvent,
  upcomingEvents,
  currentTime,
}: EventCardProps) => {
  if (!activeEvent) {
    return (
      <div className={styles.eventPanel}>
        <div className={styles.eventHeader}>
          <div className={styles.eventHeading}>
            <div className={styles.eventTitleRow}>
              <h2 className={styles.eventTitle}>
                <EventIcon type="SAFETY_CAR" size="medium" ariaLabel="대기" />
                타임라인을 탐색해보세요
              </h2>
            </div>
            <p className={styles.eventDescription}>
              좌우 드래그 또는 마우스 휠을 사용해 시간축을 이동하면 각 랩에서 벌어진
              주요 순간을 확인할 수 있습니다.
            </p>
          </div>
          <div className={styles.eventMetaRow}>
            <div className={styles.eventMetaItem}>
              <span>현재 재생 위치</span>
              <span className={styles.timeCode}>{formatRaceTime(Math.max(currentTime, 0))}</span>
            </div>
          </div>
        </div>

        <div className={styles.emptyState}>
          재생을 시작하거나 슬라이더를 이동해 이벤트를 탐색해보세요.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.eventPanel}>
      <div className={styles.eventHeader}>
        <div className={styles.eventHeading}>
          <div className={styles.eventTitleRow}>
            <h2 className={styles.eventTitle}>
              <EventIcon
                type={activeEvent.type}
                size="medium"
                ariaLabel={raceEventTypeLabel[activeEvent.type]}
              />
              {raceEventTypeLabel[activeEvent.type]}
            </h2>
            <span className={styles.eventBadge[activeEvent.type]}>
              {badgeIcons[activeEvent.type]} {raceEventTypeLabel[activeEvent.type]}
            </span>
          </div>

          <div className={styles.eventMetaRow}>
            <div className={styles.eventMetaItem}>
              <span>랩</span>
              <span className={styles.eventMetaValue}>Lap {activeEvent.lap}</span>
            </div>
            <div className={styles.eventMetaItem}>
              <span>타이밍</span>
              <span className={styles.timeCode}>{formatRaceTime(activeEvent.time)}</span>
            </div>
            {activeEvent.position ? (
              <div className={styles.eventMetaItem}>
                <span>포지션</span>
                <span className={styles.eventMetaValue}>P{activeEvent.position}</span>
              </div>
            ) : null}
            {activeEvent.team ? (
              <div className={styles.eventMetaItem}>
                <span>팀</span>
                <span className={styles.eventMetaValue}>{activeEvent.team}</span>
              </div>
            ) : null}
          </div>
        </div>

        <p className={styles.eventDescription}>{activeEvent.description}</p>

        {activeEvent.relatedDrivers && activeEvent.relatedDrivers.length > 0 ? (
          <div>
            <span className={styles.speedLabel}>관련 드라이버</span>
            <div className={styles.chipGroup}>
              {activeEvent.relatedDrivers.map((driver) => (
                <span key={driver} className={styles.chip}>
                  ⓘ {driver}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {upcomingEvents.length > 0 ? (
        <div className={styles.nextSection}>
          <div className={styles.divider} aria-hidden />
          <h3 className={styles.sectionTitle}>다음 이벤트</h3>
          <div className={styles.nextList}>
            {upcomingEvents.slice(0, 4).map((event) => (
              <div key={event.id} className={styles.nextItem}>
                <EventIcon
                  type={event.type}
                  size="small"
                  ariaLabel={raceEventTypeLabel[event.type]}
                />
                <div className={styles.nextItemMeta}>
                  <span>
                    {raceEventTypeLabel[event.type]} · 랩 {event.lap}
                  </span>
                  <span className={styles.nextTime}>{formatRaceTime(event.time)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

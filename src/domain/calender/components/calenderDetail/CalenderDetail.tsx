import { useMemo } from 'react';
import type {
  CalenderEvent,
  CalenderSession,
} from '@domain/calender/data/calender.ts';
import * as styles from './calenderDetail.css.ts';

const KOREA_TIMEZONE = 'Asia/Seoul';

const formatDateRange = (startIso: string, endIso: string) => {
  const start = new Date(startIso);
  const end = new Date(endIso);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return '';
  }

  const startLabel = start.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: KOREA_TIMEZONE,
  });
  const endLabel = end.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: KOREA_TIMEZONE,
  });

  return `${startLabel} ~ ${endLabel}`;
};

const formatSessionRange = (session: CalenderSession) => {
  const start = new Date(session.start);
  const end = new Date(session.end);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return { window: '', duration: '' };
  }

  const startDateLabel = start.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: KOREA_TIMEZONE,
  });
  const endDateLabel = end.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: KOREA_TIMEZONE,
  });

  const startTimeLabel = start.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: KOREA_TIMEZONE,
  });
  const endTimeLabel = end.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: KOREA_TIMEZONE,
  });

  const sameDay = startDateLabel === endDateLabel;
  const window = sameDay
    ? `${startDateLabel} ${startTimeLabel} ~ ${endTimeLabel}`
    : `${startDateLabel} ${startTimeLabel} ~ ${endDateLabel} ${endTimeLabel}`;

  const durationMinutes = Math.max(
    0,
    Math.round((end.getTime() - start.getTime()) / 60000)
  );

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  const durationParts = [] as string[];

  if (hours) {
    durationParts.push(`${hours}시간`);
  }
  if (minutes) {
    durationParts.push(`${minutes}분`);
  }

  return {
    window,
    duration: durationParts.join(' '),
  };
};

interface CalenderDetailProps {
  event?: CalenderEvent;
}

export const CalenderDetail = ({ event }: CalenderDetailProps) => {
  const dateRange = useMemo(() => {
    if (!event) {
      return '';
    }
    return formatDateRange(event.startDate, event.endDate);
  }, [event]);

  if (!event) {
    return (
      <section className={styles.container} aria-label="선택된 일정 없음">
        <p className={styles.placeholder}>
          확인하고 싶은 그랑프리를 선택하면 세부 일정이 표시됩니다.
        </p>
      </section>
    );
  }

  return (
    <section
      className={styles.container}
      aria-labelledby={`${event.slug}-title`}
    >
      <header className={styles.header}>
        <span className={styles.label}>FORMULA 1</span>
        <h2 id={`${event.slug}-title`} className={styles.title}>
          {event.eventName.toUpperCase()}
        </h2>
        <div className={styles.meta}>
          <span>{dateRange}</span>
          <span className={styles.metaDivider}>•</span>
          <span>
            {event.country} / {event.locality} / {event.circuit}
          </span>
        </div>
      </header>

      <div>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>세션 일정</h3>
          <span className={styles.sessionDuration}>
            시간은 한국 기준(KST)입니다.
          </span>
        </div>
        <ul className={styles.sessionList}>
          {event.sessions.map((session) => {
            const { window, duration } = formatSessionRange(session);
            return (
              <li
                key={`${event.slug}-${session.type}`}
                className={styles.sessionItem}
              >
                <div>
                  <span className={styles.sessionLabel}>{session.label}</span>
                  {duration ? (
                    <div className={styles.sessionDuration}>{duration}</div>
                  ) : null}
                </div>
                <span className={styles.sessionTime}>{window}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

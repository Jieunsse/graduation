import { useMemo } from 'react';
import type { CalenderEvent } from '@domain/calender/data/calender.ts';
import * as styles from './calenderCard.css.ts';

type EventStatus = 'upcoming' | 'live' | 'completed';

const STATUS_LABEL: Record<EventStatus, string> = {
  upcoming: '진행 예정',
  live: '진행 중',
  completed: '종료',
};

const getEventStatus = (event: CalenderEvent): EventStatus => {
  const now = Date.now();
  const start = new Date(event.startDate).getTime();
  const end = new Date(event.endDate).getTime();

  if (Number.isNaN(start) || Number.isNaN(end)) {
    return 'upcoming';
  }

  if (now < start) {
    return 'upcoming';
  }

  if (now > end) {
    return 'completed';
  }

  return 'live';
};

const formatDateTime = (iso: string) => {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const datePart = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });

  const timePart = date.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  });

  return `${datePart} ${timePart} ~`;
};

interface CalenderCardProps {
  event: CalenderEvent;
  isSelected?: boolean;
  onSelect?: (event: CalenderEvent) => void;
}

export const CalenderCard = ({
  event,
  isSelected = false,
  onSelect,
}: CalenderCardProps) => {
  const status = useMemo(() => getEventStatus(event), [event]);
  const formattedRaceStart = useMemo(
    () => formatDateTime(event.raceStart),
    [event.raceStart]
  );

  const handleClick = () => {
    onSelect?.(event);
  };

  const className = [styles.card, isSelected ? styles.selected : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-pressed={isSelected}
    >
      <div className={styles.round}>
        <span className={styles.roundLabel}>라운드</span>
        <span className={styles.roundNumber}>{event.round}</span>
      </div>

      <div className={styles.info}>
        <div className={styles.locationRow}>
          <span className={styles.flag} aria-hidden>
            {event.flag}
          </span>
          <span>
            {event.country} / {event.locality}
          </span>
        </div>
        <h3 className={styles.title}>{event.eventName}</h3>
        <p className={styles.circuit}>{event.circuit}</p>
      </div>

      <div className={styles.trailing}>
        <span className={styles.statusBadge[status]}>
          {STATUS_LABEL[status]}
        </span>
      </div>
      <span className={styles.dateText}>{formattedRaceStart}</span>
    </button>
  );
};

import React from 'react';
import type { CalanderEvent } from '@domain/calander/data/calander.ts';
import { CalanderCard } from '@domain/calander/components/calanderCard/CalanderCard.tsx';
import * as styles from './calanderList.css.ts';

interface CalanderListProps {
  events: CalanderEvent[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

export const CalanderList = ({
  events,
  selectedSlug,
  onSelect,
}: CalanderListProps) => {
  const total = events.length;

  return (
    <section className={styles.container} aria-label="레이스 캘린더 목록">
      <div className={styles.header}>
        <div>
          <span className={styles.stickyCount}>GP CALENDAR</span>
          <h2 className={styles.title}>2025 시즌 일정</h2>
        </div>
        <p className={styles.subtitle}>총 {total}개 그랑프리</p>
      </div>

      {total === 0 ? (
        <p className={styles.empty}>등록된 일정이 없습니다.</p>
      ) : (
        <div className={styles.list}>
          {events.map((event) => (
            <CalanderCard
              key={event.slug}
              event={event}
              isSelected={event.slug === selectedSlug}
              onSelect={() => onSelect(event.slug)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

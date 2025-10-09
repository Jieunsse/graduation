import React from 'react';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEventType } from '../types/raceEvent.ts';

const iconMap: Record<RaceEventType, string> = {
  OVERTAKE: '⬆',
  CRASH: '✖',
  PIT_STOP: '🛠',
  SAFETY_CAR: '⚠',
  RED_FLAG: '⛔',
};

interface EventIconProps {
  type: RaceEventType;
  size?: 'small' | 'medium';
  ariaLabel?: string;
}

export const EventIcon = ({ type, size = 'medium', ariaLabel }: EventIconProps) => {
  return (
    <span
      className={`${styles.eventIcon} ${styles.eventIconSize[size]} ${styles.eventIconByType[type]}`}
      role="img"
      aria-label={ariaLabel ?? type}
    >
      {iconMap[type]}
    </span>
  );
};

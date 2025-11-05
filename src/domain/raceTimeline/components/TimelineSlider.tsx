import React, { useCallback, useMemo } from 'react';
import { EventIcon } from './EventIcon.tsx';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEvent } from '../types/raceEvent.ts';
import { raceEventTypeLabel } from '../types/raceEvent.ts';

interface TimelineSliderProps {
  events: RaceEvent[];
  currentTime: number;
  onTimeChange: (time: number) => void;
}

const formatRaceTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remaining
    .toString()
    .padStart(2, '0')}`;
};

export const TimelineSlider = ({
  events,
  currentTime,
  onTimeChange,
}: TimelineSliderProps) => {
  const eventTimes = useMemo(() => events.map((event) => event.time), [events]);
  const eventCount = eventTimes.length;
  const maxIndex = Math.max(eventCount - 1, 0);

  const findNearestEventIndex = useCallback(
    (time: number) => {
      if (eventCount === 0) {
        return 0;
      }

      let nearestIndex = 0;
      let smallestDistance = Math.abs(eventTimes[0] - time);

      for (let index = 1; index < eventCount; index += 1) {
        const distance = Math.abs(eventTimes[index] - time);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearestIndex = index;
        }
      }

      return nearestIndex;
    },
    [eventCount, eventTimes]
  );

  const currentIndex = useMemo(
    () => findNearestEventIndex(currentTime),
    [currentTime, findNearestEventIndex]
  );

  const activeEvent = events[currentIndex];
  const activeTime = eventCount > 0 ? eventTimes[currentIndex] : 0;
  const maxTime = eventCount > 0 ? eventTimes[eventCount - 1] : 0;
  const progressRatio = maxIndex === 0 ? 0 : currentIndex / maxIndex;
  const progressPercent = progressRatio * 100;
  const totalLap = events[eventCount - 1]?.lap ?? 0;
  const currentLap = activeEvent?.lap;

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextIndex = Number(event.target.value);
      const nextTime = eventTimes[nextIndex];
      if (typeof nextTime === 'number') {
        onTimeChange(nextTime);
      }
    },
    [eventTimes, onTimeChange]
  );

  const handleMarkerClick = useCallback(
    (time: number) => {
      onTimeChange(time);
    },
    [onTimeChange]
  );

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (eventCount === 0) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        maxIndex
      );
      const nextTime = eventTimes[nextIndex];
      if (typeof nextTime === 'number' && nextTime !== activeTime) {
        onTimeChange(nextTime);
      }
    },
    [activeTime, currentIndex, eventCount, eventTimes, maxIndex, onTimeChange]
  );

  const markers = useMemo(() => {
    return events.map((event, index) => {
      const percent = maxIndex === 0 ? 0 : (index / maxIndex) * 100;
      return {
        id: event.id,
        type: event.type,
        time: event.time,
        percent: Number.isFinite(percent) ? percent : 0,
        label: `${raceEventTypeLabel[event.type]} · ${formatRaceTime(event.time)}`,
        isActive: index === currentIndex,
      };
    });
  }, [currentIndex, events, maxIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderRail} onWheel={handleWheel}>
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderProgress}
            style={{ transform: `scaleX(${progressRatio})` }}
            aria-hidden
          />

          <div className={styles.markerLayer}>
            {markers.map((marker) => (
              <button
                key={marker.id}
                type="button"
                title={marker.label}
                style={{ left: `${marker.percent}%` }}
                className={`${styles.markerButton} ${marker.isActive ? styles.markerActive : ''}`}
                onClick={() => handleMarkerClick(marker.time)}
                aria-label={marker.label}
              >
                <EventIcon type={marker.type} size="small" ariaLabel={marker.label} />
              </button>
            ))}

            {events.length > 0 ? (
              <div
                className={styles.currentIndicator}
                style={{ left: `${progressPercent}%` }}
                aria-hidden
              >
                <span className={styles.currentPulse} />
              </div>
            ) : null}
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={maxIndex}
          step={1}
          value={currentIndex}
          onChange={handleInputChange}
          className={styles.sliderInput}
          aria-label="Race timeline"
          disabled={events.length === 0}
        />
      </div>

      <div className={styles.sliderMeta}>
        <div className={styles.lapInfo}>
          <span className={styles.lapIcon} role="img" aria-label="현재 랩">
            🏁
          </span>
          <span>
            Lap <span className={styles.lapCount}>{currentLap ?? '-'}</span> / {totalLap || '-'}
          </span>
        </div>
        <div className={styles.timeStack}>
          <span className={styles.timeCode}>현재 {formatRaceTime(activeTime)}</span>
          <span className={styles.timeCode}>전체 {formatRaceTime(maxTime)}</span>
        </div>
      </div>
    </div>
  );
};

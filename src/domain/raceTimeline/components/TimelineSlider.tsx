import React, { useCallback, useMemo } from 'react';
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

  const activeTime = eventCount > 0 ? eventTimes[currentIndex] : 0;
  const maxTime = eventCount > 0 ? eventTimes[eventCount - 1] : 0;
  const progress = maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100;

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
    <div className={styles.sliderContainer} onWheel={handleWheel}>
      <div className={styles.sliderRoot}>
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderRange}
            style={{ width: `${progress}%` }}
            aria-hidden
          />
          <div className={styles.markerLayer}>
            {markers.map((marker) => (
              <button
                key={marker.id}
                type="button"
                style={{ left: `${marker.percent}%` }}
                className={`${styles.marker} ${styles.markerByType[marker.type]} ${marker.isActive ? styles.markerActive : ''}`}
                onClick={() => handleMarkerClick(marker.time)}
                aria-label={marker.label}
              />
            ))}
          </div>
          <div
            className={styles.sliderThumb}
            style={{ left: `${progress}%` }}
            aria-hidden
          />
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

      <div className={styles.playheadTime}>
        <span>현재 시점 {formatRaceTime(activeTime)}</span>
        <span>전체 {formatRaceTime(maxTime)}</span>
      </div>

      {/*<div className={styles.controlGroup} aria-hidden>*/}
      {/*  {markers.map((marker) => (*/}
      {/*    <EventIcon key={marker.id} type={marker.type} size="small" ariaLabel={marker.label} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

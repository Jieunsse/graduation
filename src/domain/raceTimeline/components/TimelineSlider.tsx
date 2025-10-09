import React, { useCallback, useMemo } from 'react';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEvent } from '../types/raceEvent.ts';
import { raceEventTypeLabel } from '../types/raceEvent.ts';
import { EventIcon } from './EventIcon.tsx';

interface TimelineSliderProps {
  events: RaceEvent[];
  currentTime: number;
  onTimeChange: (time: number) => void;
}

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const formatRaceTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remaining
    .toString()
    .padStart(2, '0')}`;
};

export const TimelineSlider = ({ events, currentTime, onTimeChange }: TimelineSliderProps) => {
  const minTime = events.length > 0 ? events[0].time : 0;
  const maxTime = events.length > 0 ? events[events.length - 1].time : 0;
  const range = Math.max(maxTime - minTime, 1);
  const clampedTime = clamp(currentTime, minTime, maxTime);
  const progress = range === 0 ? 0 : ((clampedTime - minTime) / range) * 100;

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onTimeChange(Number(event.target.value));
    },
    [onTimeChange],
  );

  const handleMarkerClick = useCallback(
    (time: number) => {
      onTimeChange(time);
    },
    [onTimeChange],
  );

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (range === 0) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const step = Math.max(1, Math.round(range / 120));
      const next = clamp(currentTime + direction * step, minTime, maxTime);
      onTimeChange(next);
    },
    [currentTime, maxTime, minTime, onTimeChange, range],
  );

  const markers = useMemo(() => {
    return events.map((event) => {
      const percent = ((event.time - minTime) / range) * 100;
      return {
        id: event.id,
        type: event.type,
        time: event.time,
        percent: Number.isFinite(percent) ? percent : 0,
        label: `${raceEventTypeLabel[event.type]} · ${formatRaceTime(event.time)}`,
      };
    });
  }, [events, minTime, range]);

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
                className={`${styles.marker} ${styles.markerByType[marker.type]}`}
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
          min={minTime}
          max={maxTime}
          step={1}
          value={clampedTime}
          onChange={handleInputChange}
          className={styles.sliderInput}
          aria-label="Race timeline"
          disabled={events.length === 0}
        />
      </div>

      <div className={styles.playheadTime}>
        <span>현재 시점 {formatRaceTime(clampedTime)}</span>
        <span>전체 {formatRaceTime(maxTime)}</span>
      </div>

      <div className={styles.controlGroup} aria-hidden>
        {markers.map((marker) => (
          <EventIcon key={marker.id} type={marker.type} size="small" ariaLabel={marker.label} />
        ))}
      </div>
    </div>
  );
};

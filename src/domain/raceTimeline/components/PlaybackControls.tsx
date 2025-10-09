import React from 'react';
import * as styles from '../styles/timeline.css.ts';

interface PlaybackControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  isDisabled?: boolean;
}

const playbackSpeeds = [0.5, 1, 1.5, 2];

export const PlaybackControls = ({
  isPlaying,
  onTogglePlay,
  onReset,
  speed,
  onSpeedChange,
  isDisabled,
}: PlaybackControlsProps) => {
  return (
    <div className={styles.controlsRow}>
      <div className={styles.controlGroup}>
        <button
          type="button"
          className={`${styles.controlButton} ${styles.controlButtonPrimary}`}
          onClick={onTogglePlay}
          disabled={isDisabled}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          type="button"
          className={styles.controlButton}
          onClick={onReset}
          disabled={isDisabled}
        >
          초기화
        </button>
      </div>

      <div className={styles.controlGroup}>
        <span className={styles.controlLabel}>재생 속도</span>
        {playbackSpeeds.map((value) => {
          const isActive = value === speed;
          return (
            <button
              key={value}
              type="button"
              className={`${styles.controlButton} ${isActive ? styles.controlButtonActive : ''}`}
              onClick={() => onSpeedChange(value)}
            >
              {value.toFixed(1)}x
            </button>
          );
        })}
      </div>
    </div>
  );
};

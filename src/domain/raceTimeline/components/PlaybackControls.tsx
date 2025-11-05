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
      <div className={styles.controlsPrimary}>
        <button
          type="button"
          className={styles.playButton}
          onClick={onTogglePlay}
          disabled={isDisabled}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          type="button"
          className={`${styles.controlButton} ${styles.resetButton}`}
          onClick={onReset}
          disabled={isDisabled}
        >
          초기화
        </button>
      </div>

      <div className={styles.controlsPrimary}>
        <span className={styles.speedLabel}>재생 속도</span>
        {playbackSpeeds.map((value) => {
          const isActive = value === speed;
          return (
            <button
              key={value}
              type="button"
              className={`${styles.controlButton} ${isActive ? styles.controlButtonActive : ''}`}
              onClick={() => onSpeedChange(value)}
              aria-pressed={isActive}
            >
              {value.toFixed(1)}x
            </button>
          );
        })}
      </div>
    </div>
  );
};

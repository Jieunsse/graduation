import type { ChangeEvent } from 'react';
import * as styles from '@domain/lapTime/styles/controls.css.ts';
import type { LapTimeUnit } from '@domain/lapTime/types/lapTime.ts';

interface ChartOptionsProps {
  includePitLaps: boolean;
  onIncludePitLapsChange: (value: boolean) => void;
  unit: LapTimeUnit;
  onUnitChange: (unit: LapTimeUnit) => void;
  cutOffRatio: number;
  onCutOffRatioChange: (value: number) => void;
  fastestLap?: number;
}

export const ChartOptions = ({
  includePitLaps,
  onIncludePitLapsChange,
  unit,
  onUnitChange,
  cutOffRatio,
  onCutOffRatioChange,
  fastestLap,
}: ChartOptionsProps) => {
  const handleUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onUnitChange(event.target.value as LapTimeUnit);
  };

  const handleCutOffChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCutOffRatioChange(Number(event.target.value));
  };

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.optionCard}>
        <span className={styles.optionLabel}>Include Pit-Lap</span>
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={includePitLaps}
            onChange={(event) => onIncludePitLapsChange(event.target.checked)}
          />
          피트 스탑 구간 포함하기
        </label>
      </div>

      <div className={styles.optionCard}>
        <span className={styles.optionLabel}>Time Unit</span>
        <select className={styles.select} value={unit} onChange={handleUnitChange}>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
        </select>
        <span className={styles.helperText}>
          차트 Y축 단위를 선택하세요.
        </span>
      </div>

      <div className={styles.optionCard}>
        <span className={styles.optionLabel}>Cut-off Ratio</span>
        <input
          className={styles.slider}
          type="range"
          min={1.0}
          max={2.0}
          step={0.05}
          value={cutOffRatio}
          onChange={handleCutOffChange}
        />
        <span>
          {cutOffRatio.toFixed(2)} × 베스트 랩보다 느린 랩 제외
        </span>
        {typeof fastestLap === 'number' ? (
          <span className={styles.helperText}>
            현재 베스트 랩: {fastestLap.toFixed(3)}초
          </span>
        ) : null}
      </div>
    </div>
  );
};

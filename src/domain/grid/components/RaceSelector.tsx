import React, { useId } from 'react';
import * as styles from '@domain/grid/styles/raceSelector.css.ts';
import type {
  RaceKey,
  RaceOption,
} from '@domain/grid/data/raceGridData.ts';

interface RaceSelectorProps {
  options: RaceOption[];
  value: RaceKey;
  onChange: (value: RaceKey) => void;
}

export const RaceSelector = ({ options, value, onChange }: RaceSelectorProps) => {
  const selectId = useId();

  return (
    <div className={styles.container}>
      <label htmlFor={selectId} className={styles.label}>
        Race Selector
      </label>
      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          className={styles.select}
          value={value}
          onChange={(event) => onChange(event.target.value as RaceKey)}
        >
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
        <span aria-hidden className={styles.selectChevron} />
      </div>
    </div>
  );
};

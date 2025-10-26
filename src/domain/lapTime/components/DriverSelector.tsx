import * as styles from '@domain/lapTime/styles/controls.css.ts';
import { driverImages } from '@domain/lapTime/img/driverImg.ts';

export interface DriverOption {
  name: string;
  team: string;
  color: string;
}

interface DriverSelectorProps {
  drivers: DriverOption[];
  selectedDrivers: string[];
  onToggleDriver: (driver: string, selected: boolean) => void;
}

export const DriverSelector = ({
  drivers,
  selectedDrivers,
  onToggleDriver,
}: DriverSelectorProps) => {
  return (
    <div className={`${styles.optionCard} ${styles.optionCardFullWidth}`}>
      <span className={styles.optionLabel}>Driver Selector</span>
      {drivers.length === 0 ? (
        <span className={styles.helperText}>
          선택 가능한 드라이버가 없습니다.
        </span>
      ) : (
        <div className={styles.driverGrid}>
          {drivers.map((driver) => {
            const isSelected = selectedDrivers.includes(driver.name);
            const imgSrc = driverImages[driver.name] ?? '/fallback.png'; // fallback 이미지
            return (
              <label
                key={driver.name}
                className={styles.driverOption}
                data-selected={isSelected}
              >
                <input
                  type="checkbox"
                  className={styles.driverCheckbox}
                  checked={isSelected}
                  onChange={(event) =>
                    onToggleDriver(driver.name, event.target.checked)
                  }
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <img
                    className={styles.driverImg}
                    src={imgSrc}
                    alt={driver.name}
                  />
                  <span className={styles.driverInfo}>
                    <span className={styles.driverName} title={driver.name}>
                      {driver.name}
                    </span>
                    <span className={styles.driverTeam}>{driver.team}</span>
                  </span>
                </div>
                <span
                  className={styles.driverColor}
                  style={{ backgroundColor: driver.color }}
                  aria-hidden
                />
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

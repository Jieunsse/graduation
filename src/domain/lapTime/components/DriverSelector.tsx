import * as styles from '@domain/lapTime/styles/controls.css.ts';

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
    <div className={styles.optionCard} style={{ gridColumn: '1 / -1' }}>
      <span className={styles.optionLabel}>Driver Selector</span>
      {drivers.length === 0 ? (
        <span className={styles.helperText}>
          선택 가능한 드라이버가 없습니다.
        </span>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 8,
          }}
        >
          {drivers.map((driver) => {
            const isSelected = selectedDrivers.includes(driver.name);
            return (
              <label
                key={driver.name}
                className={styles.checkboxRow}
                style={{
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: 10,
                  padding: '6px 10px',
                  background: isSelected
                    ? 'rgba(99, 102, 241, 0.12)'
                    : 'transparent',
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(event) =>
                    onToggleDriver(driver.name, event.target.checked)
                  }
                />
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: driver.color,
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontWeight: 600 }}>{driver.name}</span>
                <span style={{ fontSize: 12, opacity: 0.6 }}>{driver.team}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

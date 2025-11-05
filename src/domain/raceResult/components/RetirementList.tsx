import * as styles from '../styles/raceResult.css.ts';

export interface RetirementEntry {
  driverName: string;
  teamName: string;
  lap: number | string;
  reason?: string;
  teamColor: string;
}

interface RetirementListProps {
  entries: RetirementEntry[];
}

export const RetirementList = ({ entries }: RetirementListProps) => {
  if (entries.length === 0) {
    return null;
  }

  return (
    <section className={styles.retirementSection}>
      <div>
        <h2 className={styles.sectionTitle}>리타이어 목록</h2>
        <p className={styles.sectionSubtitle}>
          DNF/DSQ 드라이버와 리타이어 시점을 확인하세요.
        </p>
      </div>
      <div className={styles.retirementList}>
        {entries.map((entry) => (
          <div
            key={`${entry.driverName}-${entry.lap}`}
            className={styles.retirementItem}
            style={{
              background: `linear-gradient(135deg, ${entry.teamColor}55, rgba(15, 23, 42, 0.85))`,
            }}
          >
            <span className={styles.retirementName}>{entry.driverName}</span>
            <span className={styles.retirementMeta}>
              {entry.teamName} • Lap {entry.lap}
              {entry.reason ? ` • ${entry.reason}` : ''}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

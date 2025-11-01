import * as styles from '../styles/raceResult.css.ts';

export interface RaceResultRow {
  position: number | null;
  driverName: string;
  teamName: string;
  points: number;
  laps: number;
  gap: string;
  status: 'FIN' | 'DNF' | 'DSQ' | 'DNS';
  time: string;
  driverNumber: number;
  teamColor: string;
  tooltip: string;
}

interface RaceResultTableProps {
  rows: RaceResultRow[];
}

const podiumClass = (position: number | null) => {
  if (position === 1) {
    return styles.podiumHighlight.gold;
  }

  if (position === 2) {
    return styles.podiumHighlight.silver;
  }

  if (position === 3) {
    return styles.podiumHighlight.bronze;
  }

  return '';
};

export const STATUS_LABELS: Record<RaceResultRow['status'], string> = {
  FIN: '완주',
  DNF: '리타이어',
  DSQ: '실격',
  DNS: '출전 불가',
};

export const RaceResultTable = ({ rows }: RaceResultTableProps) => {
  return (
    <section className={styles.tableCard}>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.tableHeaderCell}>순위</th>
              <th className={styles.tableHeaderCell}>드라이버</th>
              <th className={styles.tableHeaderCell}>팀</th>
              <th className={styles.tableHeaderCell}>완주 랩</th>
              <th className={styles.tableHeaderCell}>차이</th>
              <th className={styles.tableHeaderCell}>기록</th>
              <th className={styles.tableHeaderCell}>포인트</th>
              <th className={styles.tableHeaderCell}>상태</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={`${row.driverNumber}-${row.position ?? 'na'}`}
                className={`${styles.tableRow} ${podiumClass(row.position)}`}
                data-tooltip={row.tooltip}
                style={{
                  borderLeftColor: row.teamColor,
                  opacity:
                    row.status === 'DNF' || row.status === 'DSQ' ? 0.75 : 1,
                }}
              >
                <td className={`${styles.tableCell} ${styles.positionCell}`}>
                  <span className={styles.positionBadge}>
                    {row.position ?? '-'}
                  </span>
                </td>
                <td className={`${styles.tableCell} ${styles.driverCell}`}>
                  <span
                    className={styles.teamDot}
                    style={{ backgroundColor: row.teamColor }}
                    aria-hidden
                  />
                  <span className={styles.driverText}>
                    <span className={styles.driverNameKo}>{row.driverName}</span>
                    <span className={styles.driverNumberBadge}>
                      #{row.driverNumber}
                    </span>
                  </span>
                </td>
                <td className={`${styles.tableCell} ${styles.teamCell}`}>
                  {row.teamName}
                </td>
                <td className={`${styles.tableCell} ${styles.numericCell}`}>
                  {row.laps.toLocaleString()}랩
                </td>
                <td className={`${styles.tableCell} ${styles.gapCell}`}>
                  {row.gap}
                </td>
                <td className={`${styles.tableCell} ${styles.timeCell}`}>
                  {row.time}
                </td>
                <td className={`${styles.tableCell} ${styles.pointsCell}`}>
                  <span className={styles.pointsBadge}>
                    {row.points.toFixed(1)}점
                  </span>
                </td>
                <td className={`${styles.tableCell} ${styles.statusCell}`}>
                  <span
                    className={`${styles.statusPill} ${styles.statusBadge[row.status]}`}
                  >
                    <span className={styles.statusCode}>{row.status}</span>
                    <span
                      className={styles.statusLabel}
                      title={row.status}
                    >
                      {STATUS_LABELS[row.status]}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

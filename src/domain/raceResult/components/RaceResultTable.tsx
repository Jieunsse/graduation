import * as styles from '../styles/raceResult.css.ts';

export interface RaceResultRow {
  position: number | null;
  driverName: string;
  driverCode: string;
  driverImageUrl: string;
  teamName: string;
  teamLogoUrl: string;
  points: number;
  gap: string;
  status: 'FIN' | 'DNF' | 'DSQ' | 'DNS';
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

const statusClass = (status: RaceResultRow['status']) => {
  switch (status) {
    case 'FIN':
      return styles.statusBadge.fin;
    case 'DNF':
      return styles.statusBadge.dnf;
    case 'DSQ':
      return styles.statusBadge.dsq;
    case 'DNS':
    default:
      return styles.statusBadge.dns;
  }
};

const statusLabel = (status: RaceResultRow['status']) => {
  switch (status) {
    case 'FIN':
      return '완주';
    case 'DNF':
      return '탈락';
    case 'DSQ':
      return '실격';
    case 'DNS':
    default:
      return '불참';
  }
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
              <th className={styles.tableHeaderCell}>포인트</th>
              <th className={styles.tableHeaderCell}>기록/차이</th>
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
                  borderLeft: `4px solid ${row.teamColor}`,
                  opacity:
                    row.status === 'DNF' || row.status === 'DSQ' ? 0.6 : 1,
                }}
              >
                <td className={styles.tableCell}>{row.position ?? '-'}</td>

                <td className={`${styles.tableCell} ${styles.driverCell}`}>
                  <img
                    className={styles.driverAvatarSmall}
                    src={row.driverImageUrl}
                    alt={`${row.driverName} 프로필 이미지`}
                  />
                  <div className={styles.driverText}>
                    <span className={styles.driverNameText}>
                      {row.driverName}
                    </span>
                    <span className={styles.driverCodeText}>
                      {row.driverCode}
                    </span>
                  </div>
                </td>
                <td className={`${styles.tableCell} ${styles.teamCell}`}>
                  <img
                    className={styles.teamLogo}
                    src={row.teamLogoUrl}
                    alt={`${row.teamName} 로고`}
                  />
                  <span>{row.teamName}</span>
                </td>
                <td className={styles.tableCell}>{row.points.toFixed(1)}</td>
                <td className={styles.tableCell}>{row.gap}</td>
                <td
                  className={`${styles.tableCell} ${statusClass(row.status)}`}
                >
                  {statusLabel(row.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

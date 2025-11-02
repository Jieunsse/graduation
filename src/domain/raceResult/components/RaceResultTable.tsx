import * as styles from '../styles/raceResult.css.ts';

const hexToRgba = (color: string, alpha: number) => {
  const sanitized = color.replace('#', '');
  const normalized =
    sanitized.length === 3
      ? sanitized
          .split('')
          .map((char) => char + char)
          .join('')
      : sanitized;

  if (normalized.length !== 6) {
    return `rgba(76, 81, 109, ${alpha})`;
  }

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const podiumOverlay = (position: number | null) => {
  switch (position) {
    case 1:
      return 'linear-gradient(90deg, rgba(212, 175, 55, 0.22), rgba(120, 88, 0, 0.18))';
    case 2:
      return 'linear-gradient(90deg, rgba(194, 200, 215, 0.22), rgba(114, 116, 135, 0.18))';
    case 3:
      return 'linear-gradient(90deg, rgba(205, 127, 50, 0.22), rgba(148, 86, 0, 0.18))';
    default:
      return null;
  }
};

const buildRowBackground = (teamColor: string, position: number | null) => {
  const baseTint = teamColor
    ? `linear-gradient(90deg, ${hexToRgba(teamColor, 0.22)}, ${hexToRgba(
        teamColor,
        0.04
      )})`
    : null;
  const podiumTint = podiumOverlay(position);

  if (podiumTint && baseTint) {
    return `${podiumTint}, ${baseTint}`;
  }

  return podiumTint ?? baseTint ?? undefined;
};

const buildTeamLogoStyles = (teamColor: string) => ({
  backgroundColor: hexToRgba(teamColor, 0.24),
  border: `1px solid ${hexToRgba(teamColor, 0.55)}`,
  boxShadow: `0 10px 18px ${hexToRgba(teamColor, 0.28)}`,
});

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
                className={styles.tableRow}
                data-tooltip={row.tooltip}
                style={{
                  borderLeft: `4px solid ${row.teamColor}`,
                  backgroundImage: buildRowBackground(
                    row.teamColor,
                    row.position
                  ),
                  backgroundBlendMode: 'soft-light',
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
                    style={buildTeamLogoStyles(row.teamColor)}
                  />
                  <span className={styles.teamNameCellText}>{row.teamName}</span>
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

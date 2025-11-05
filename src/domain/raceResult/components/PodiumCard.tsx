import type { FC } from 'react';
import * as styles from '../styles/podiumCard.css.ts';

type TeamIdentifier = keyof typeof styles.cardThemes;

export interface PodiumDriverInfo {
  position: number;
  driverName: string;
  englishName?: string;
  teamName: string;
  teamLogoUrl?: string;
  teamId: TeamIdentifier;
  points: number;
  imageUrl?: string;
  code?: string;
}

export const PodiumCard: FC<PodiumDriverInfo> = ({
  position,
  driverName,
  englishName,
  teamName,
  teamLogoUrl,
  teamId,
  points,
  imageUrl,
  code,
}) => {
  return (
    <article
      className={`${styles.card} ${styles.cardThemes[teamId]}`}
      aria-label={`${position}위 ${driverName}`}
    >
      <span className={styles.positionBadge}>P{position}</span>
      <span className={styles.srOnly} aria-hidden>
        {englishName}
      </span>

      <div className={styles.cardBody}>
        <div className={styles.driverHeader}>
          {teamLogoUrl ? (
            <img
              className={styles.teamLogo}
              src={teamLogoUrl}
              alt={`${teamName} 로고`}
              loading="lazy"
            />
          ) : null}
          <div className={styles.driverMeta}>
            <span className={styles.driverCode}>
              {code ? `No.${code}` : `P${position}`}
            </span>
            <h3 className={styles.driverName}>{driverName}</h3>
          </div>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.teamBadge}>{teamName}</span>
          <div className={styles.points}>
            <span className={styles.pointsLabel}>드라이버 포인트</span>
            <span className={styles.pointsValue}>
              {points.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {imageUrl ? (
        <img
          className={styles.driverImage}
          src={imageUrl}
          alt={`${driverName} 드라이버 이미지`}
          loading="lazy"
        />
      ) : null}
    </article>
  );
};

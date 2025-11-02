import type { CSSProperties, FC } from 'react';
import * as styles from '../styles/podiumCard.css.ts';

export interface PodiumDriverInfo {
  position: number;
  driverName: string;
  englishName?: string;
  teamName: string;
  teamLogoUrl?: string;
  teamColor: string;
  points: number;
  imageUrl?: string;
  code?: string;
}

const positionVariantMap: Record<1 | 2 | 3, keyof typeof styles.podiumVariant> = {
  1: 'first',
  2: 'second',
  3: 'third',
};

const formatPoints = (points: number) =>
  Number.isFinite(points) ? points.toLocaleString() : '0';

export const PodiumCard: FC<PodiumDriverInfo> = ({
  position,
  driverName,
  englishName,
  teamName,
  teamLogoUrl,
  teamColor,
  points,
  imageUrl,
  code,
}) => {
  const clampedPosition = (position > 3 ? 3 : position) as 1 | 2 | 3;
  const variant = styles.podiumVariant[positionVariantMap[clampedPosition]];
  const accent = `${teamColor}55`;

  return (
    <article
      className={`${styles.card} ${variant}`}
      style={{ [styles.accentVar]: accent } as CSSProperties}
      aria-label={`${position}위 ${driverName}`}
    >
      <span className={styles.srOnly} aria-hidden>
        {englishName}
      </span>
      <div className={styles.glow} />
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.rankBadge}>
            <span>{`No.${position}`}</span>
            {code ? <span aria-hidden>{code}</span> : null}
          </span>
          <span className={styles.teamBadge}>
            {teamLogoUrl ? (
              <img
                src={teamLogoUrl}
                alt={`${teamName} 로고`}
                className={styles.teamLogo}
                loading="lazy"
              />
            ) : null}
            <span>{teamName}</span>
          </span>
        </header>
        <div className={styles.body}>
          <div className={styles.driverMeta}>
            <strong className={styles.driverName}>{driverName}</strong>
            {englishName ? (
              <span className={styles.teamName}>{englishName}</span>
            ) : null}
          </div>
          <div className={styles.pointsWrapper}>
            <span className={styles.pointsValue}>{formatPoints(points)}</span>
            <span className={styles.pointsLabel}>포인트</span>
          </div>
        </div>
      </div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          aria-hidden
          className={styles.driverImage}
          loading="lazy"
        />
      ) : null}
    </article>
  );
};


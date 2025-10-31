import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from '@domain/grid/styles/gridCard.css.ts';

interface GridCardProps {
  position: number;
  driverNumber: number;
  driverName: string;
  teamName: string;
  teamColor: string;
  imageUrl: string;
}

export const GridCard = ({
  position,
  driverNumber,
  driverName,
  teamName,
  teamColor,
  imageUrl,
}: GridCardProps) => {
  const inlineVars = assignInlineVars({
    [styles.teamColorVar]: teamColor,
  });

  const formattedNumber = `${driverNumber}.`;

  return (
    <article className={styles.card} style={inlineVars}>
      <header className={styles.header}>
        <span className={styles.position}>{position}</span>
        <div className={styles.bracket} aria-hidden>
          <span className={styles.bracketLabel}>GRID</span>
        </div>
      </header>

      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={`${driverName} 드라이버 이미지`}
          className={styles.driverImage}
          loading="lazy"
        />
      </div>

      <footer className={styles.info}>
        <p className={styles.driverName}>
          <span className={styles.driverNumber}>{formattedNumber}</span>
          <span>{driverName}</span>
        </p>
        <p className={styles.teamName}>{teamName}</p>
      </footer>
    </article>
  );
};

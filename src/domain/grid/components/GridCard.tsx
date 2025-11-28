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

  return (
    <article className={styles.card} style={inlineVars}>
      <div className={styles.positionColumn}>
        <span className={styles.positionNumber}>{position}</span>
        <span className={styles.positionBracket} aria-hidden />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.portraitFrame}>
          <img
            src={imageUrl}
            alt={`${driverName} 드라이버 이미지`}
            className={styles.driverImage}
            loading="lazy"
          />
        </div>

        <div className={styles.info}>
          <p className={styles.driverName}>
            <span className={styles.driverNumber}>{driverNumber}.</span>
            <span>{driverName}</span>
          </p>
          <p className={styles.teamName}>{teamName}</p>
        </div>
      </div>
    </article>
  );
};

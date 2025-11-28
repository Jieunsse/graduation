import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from '@domain/grid/styles/gridCard.css.ts';

interface GridCardProps {
  driverNumber: number;
  driverName: string;
  teamName: string;
  teamColor: string;
  imageUrl: string;
}

export const GridCard = ({
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

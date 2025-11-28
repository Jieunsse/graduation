import * as styles from '@domain/grid/styles/positionBracket.css.ts';

type BracketDirection = 'left' | 'right';

interface PositionBracketProps {
  direction: BracketDirection;
  position: number;
}

export const PositionBracket = ({ direction, position }: PositionBracketProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.positionValue}>{position}</span>
      <span className={styles.bracket[direction]} aria-hidden />
    </div>
  );
};

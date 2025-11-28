import { ReactNode } from 'react';
import * as styles from '@domain/grid/styles/bracketWrapper.css.ts';

interface BracketWrapperProps {
  position: number;
  children: ReactNode;
}

export const BracketWrapper = ({ position, children }: BracketWrapperProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.positionLabel}>{position}</span>
      <div className={styles.frame}>
        <div className={styles.frameInner}>{children}</div>
      </div>
    </div>
  );
};

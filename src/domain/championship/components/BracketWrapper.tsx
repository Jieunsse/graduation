import type { ReactNode } from 'react';

import * as styles from '../styles/bracketWrapper.css.ts';

interface BracketWrapperProps {
  position: number;
  children: ReactNode;
}

export const BracketWrapper = ({ position, children }: BracketWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.positionNumber}>{position}</div>
      {children}
    </div>
  );
};

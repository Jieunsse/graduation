import React from 'react';
import * as styles from '../styles/raceResult.css.ts';

interface RaceFooterProps {
  averageLaps: string;
  totalPoints: string;
  finishers: number;
  retirements: number;
}

export const RaceFooter = ({
  averageLaps,
  totalPoints,
  finishers,
  retirements,
}: RaceFooterProps) => {
  return (
    <footer className={styles.footer}>
      <span>평균 랩: {averageLaps}</span>
      <span>총 포인트: {totalPoints}</span>
      <span>완주자: {finishers}</span>
      <span>리타이어: {retirements}</span>
    </footer>
  );
};

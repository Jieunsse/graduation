import React from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { DriverCard } from '../components/driverCard.tsx';
import { drivers } from '../mock/drivers.ts';
import * as styles from './driverCardPage.css.ts';

interface DriverCardPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const totalWins = drivers.reduce((sum, driver) => sum + driver.wins, 0);
const totalPodiums = drivers.reduce((sum, driver) => sum + driver.podiums, 0);
const totalPoints = drivers.reduce((sum, driver) => sum + driver.points, 0);

export const DriverCardPage = ({
  appearance,
  setAppearance,
}: DriverCardPageProps) => {
  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroAccent} aria-hidden />
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span>드라이버 {drivers.length}명</span>
              <span>통합 우승 {totalWins}회</span>
              <span>통합 포디움 {totalPodiums}회</span>
              <span>2023 시즌 득점 합계 {totalPoints}점</span>
            </div>
            <h1 className={styles.heroTitle}>2024 Formula 1 드라이버 라인업</h1>
            <p className={styles.heroDescription}>
              Formula1.com의 최신 정보를 토대로 모든 현역 F1 드라이버를 한눈에
              정리했습니다. 각 카드에서 국적, 팀, 우승 및 포디움 기록을 살펴보고
              팀 간 전력을 비교해보세요.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          {drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};

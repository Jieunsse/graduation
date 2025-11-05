import React from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import * as styles from '../styles/driverRanking.css.ts';
import { DriverRankingShowcase } from '../components/DriverRankingShowcase.tsx';

interface DriverRankingPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const DriverRankingPage = ({
  appearance,
  setAppearance,
}: DriverRankingPageProps) => {
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
              <span>드라이버별 실시간 순위 데이터</span>
            </div>
            <h1 className={styles.heroTitle}>드라이버 스탠딩</h1>
            <p className={styles.heroDescription}>
              포뮬러 1 2025 시즌을 대표하는 드라이버들의 포인트와 소속 팀 정보를
              팀별 색상 테마와 함께 확인하세요.
            </p>
          </div>
        </section>

        <DriverRankingShowcase />
      </div>

      <Footer />
    </MainContainer>
  );
};

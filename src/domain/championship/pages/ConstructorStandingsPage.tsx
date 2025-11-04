import React from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { TeamPerformanceDashboard } from '../components/TeamPerformanceDashboard.tsx';
import * as styles from './ConstructorStandingsPage.css.ts';

interface ConstructorStandingsPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const ConstructorStandingsPage = ({
  appearance,
  setAppearance,
}: ConstructorStandingsPageProps) => {
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
              <span>실시간 세션 기반 컨스트럭터 데이터</span>
            </div>
            <h1 className={styles.heroTitle}>컨스트럭터 성과 대시보드</h1>
            <p className={styles.heroDescription}>
              최신 세션 데이터를 기반으로 각 팀의 평균 순위, 최고/최저 순위,
              드라이버 수를 한눈에 비교하세요.
            </p>
          </div>
        </section>

        <TeamPerformanceDashboard />
      </div>

      <Footer />
    </MainContainer>
  );
};

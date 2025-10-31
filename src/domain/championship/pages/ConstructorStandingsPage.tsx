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
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroAccent} aria-hidden />
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span>실시간 세션 기반 컨스트럭터 데이터</span>
              <span>OpenF1 API 연동</span>
              <span>팀별 평균 순위 및 전력 지표</span>
            </div>
            <h1 className={styles.heroTitle}>컨스트럭터 성과 대시보드</h1>
            <p className={styles.heroDescription}>
              최신 세션 데이터를 기반으로 각 팀의 평균 순위, 최고/최저 순위,
              드라이버 수를 한눈에 비교하세요. 세션 키를 입력하면 OpenF1 API와
              연동된 실시간 데이터를 확인할 수 있고, 데이터가 없을 경우 준비된
              예시 값을 통해 UI를 먼저 살펴볼 수 있습니다.
            </p>
          </div>
        </section>

        <TeamPerformanceDashboard />
      </div>

      <Footer />
    </MainContainer>
  );
};

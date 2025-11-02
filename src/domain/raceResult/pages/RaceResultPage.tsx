import React, { useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { sessionMap } from '../data/sessionMap.ts';
import { RaceHeader } from '../components/RaceHeader.tsx';
import { RaceResultTable } from '../components/RaceResultTable.tsx';
import { PodiumCard } from '../components/PodiumCard.tsx';
import { driverRankingData } from '../mocks/teamShowcaseData.ts';
import * as styles from '../styles/raceResult.css.ts';
import * as highlightStyles from '../styles/highlights.css.ts';

interface RaceResultPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const RaceResultPage = ({
  appearance,
  setAppearance,
}: RaceResultPageProps) => {
  const [selectedSession, setSelectedSession] = useState(sessionMap[0]);

  // ✅ 포디엄 데이터 (1~3위)
  const podiumDetails = useMemo(() => {
    return driverRankingData
      .sort((a, b) => b.points - a.points)
      .slice(0, 3)
      .map((driver, index) => ({
        position: index + 1,
        driverName: driver.name,
        englishName: driver.englishName,
        teamName: driver.teamName,
        teamColor: driver.teamId,
        points: driver.points,
        imageUrl: driver.imageUrl,
        teamLogoUrl: driver.teamLogoUrl,
        code: driver.code,
      }));
  }, []);

  // ✅ 전체 순위 데이터 (테이블용)
  const tableRows = useMemo(() => {
    return driverRankingData
      .sort((a, b) => b.points - a.points)
      .map((driver, index) => ({
        position: index + 1,
        driverName: driver.name,
        teamName: driver.teamName,
        points: driver.points,
        laps: 71, // 목업
        gap: index === 0 ? '리더' : `+${(index * 5).toFixed(3)}s`,
        status: 'FIN',
        driverNumber: index + 1,
        teamColor: driver.teamId,
        tooltip: `${driver.englishName} | ${driver.teamName}`,
      }));
  }, []);

  const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = Number(e.target.value);
    const next = sessionMap.find((s) => s.sessionKey === key);
    if (next) setSelectedSession(next);
  };

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />
      <div className={styles.page}>
        <div className={styles.stickyHeader}>
          <RaceHeader meta={selectedSession} topResults={podiumDetails} />
        </div>

        <div className={styles.controlsRow}>
          <label
            htmlFor="session-select"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Grand Prix 선택
          </label>
          <select
            id="session-select"
            className={styles.dropdown}
            value={selectedSession.sessionKey}
            onChange={handleSessionChange}
          >
            {sessionMap.map((session) => (
              <option key={session.sessionKey} value={session.sessionKey}>
                {session.grandPrix}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ 포디엄 카드 */}
        <section className={highlightStyles.section}>
          <div className={highlightStyles.sectionHeader}>
            <h2 className={highlightStyles.sectionTitle}>
              포디엄 하이라이트 (목업)
            </h2>
            <p className={highlightStyles.sectionCaption}>
              {selectedSession.grandPrix}
            </p>
          </div>
          <div className={highlightStyles.podiumGrid}>
            {podiumDetails.map((entry) => (
              <PodiumCard key={entry.position} {...entry} />
            ))}
          </div>
        </section>

        {/* ✅ 전체 순위 테이블 */}
        <RaceResultTable rows={tableRows} />
      </div>
      <Footer />
    </MainContainer>
  );
};

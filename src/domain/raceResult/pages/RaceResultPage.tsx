import React, { useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { sessionMap } from '../data/sessionMap.ts';
import { RaceHeader } from '../components/RaceHeader.tsx';
import {
  RaceResultTable,
  type RaceResultRow,
} from '../components/RaceResultTable.tsx';
import {
  PodiumCard,
  type PodiumDriverInfo,
} from '../components/PodiumCard.tsx';
import {
  driverRankingData,
  type DriverRanking,
} from '../mocks/teamShowcaseData.ts';
import * as styles from '../styles/raceResult.css.ts';
import * as highlightStyles from '../styles/highlights.css.ts';

const podiumRotation: DriverRanking['id'][][] = [
  ['lando-norris', 'max-verstappen', 'charles-leclerc'],
  ['oscar-piastri', 'lando-norris', 'george-russell'],
  ['max-verstappen', 'lando-norris', 'lewis-hamilton'],
  ['charles-leclerc', 'lando-norris', 'pierre-gasly'],
  ['lando-norris', 'oscar-piastri', 'george-russell'],
  ['max-verstappen', 'lando-norris', 'yuki-tsunoda'],
  ['lando-norris', 'lewis-hamilton', 'fernando-alonso'],
  ['lando-norris', 'max-verstappen', 'oscar-piastri'],
  ['george-russell', 'lando-norris', 'charles-leclerc'],
  ['oscar-piastri', 'lando-norris', 'alex-albon'],
];

const podiumMockBySession = sessionMap.reduce<
  Record<number, DriverRanking['id'][]>
>((acc, session, index) => {
  acc[session.sessionKey] = podiumRotation[index % podiumRotation.length];
  return acc;
}, {});

const teamColorById: Record<string, string> = {
  mclaren: '#FF6F1D',
  ferrari: '#E10600',
  redbull: '#3671C6',
  mercedes: '#00D2BE',
  astonmartin: '#006F62',
  williams: '#005AFF',
  haas: '#B6BABD',
  alpine: '#0090FF',
  racingbulls: '#1436B0',
};

const baseResultTemplate: Array<{
  gap: string;
  status: RaceResultRow['status'];
}> = [
  { gap: '1:37:57.574초', status: 'FIN' },
  { gap: '+12.324초', status: 'FIN' },
  { gap: '+18.049초', status: 'FIN' },
  { gap: '+26.955초', status: 'FIN' },
  { gap: '+32.065초', status: 'FIN' },
  { gap: '+38.832초', status: 'FIN' },
  { gap: '+48.214초', status: 'FIN' },
  { gap: '+55.987초', status: 'FIN' },
  { gap: '+1:03.411초', status: 'FIN' },
  { gap: '+1:18.245초', status: 'FIN' },
  { gap: '+1:22.998초', status: 'FIN' },
  { gap: '+1:35.210초', status: 'FIN' },
  { gap: '+1:40.533초', status: 'FIN' },
  { gap: '+1:45.783초', status: 'FIN' },
  { gap: '+1:48.519초', status: 'FIN' },
  { gap: '+1:50.271초', status: 'FIN' },
  { gap: '+1:57.118초', status: 'FIN' },
  { gap: '+1:59.739초', status: 'FIN' },
  { gap: '+1 랩', status: 'FIN' },
  { gap: '탈락 (기어박스 고장)', status: 'DNF' },
];

const fallbackGapForPosition = (
  positionIndex: number
): { gap: string; status: RaceResultRow['status'] } => {
  const secondsBehind = 75 + positionIndex * 4.2;
  return {
    gap: `+${secondsBehind.toFixed(3)}초`,
    status: 'FIN',
  };
};

const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const shuffleWithSeed = <T,>(items: T[], seed: number) => {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    seed += i + 1;
    const rand = pseudoRandom(seed);
    const swapIndex = Math.floor(rand * (i + 1));
    [list[i], list[swapIndex]] = [list[swapIndex], list[i]];
  }
  return list;
};

const applyGapVariance = (
  gap: string,
  sessionKey: number,
  rowIndex: number
) => {
  if (!gap.includes('초') || gap.includes(':')) {
    return gap;
  }

  const baseSeconds = parseFloat(gap.replace(/[+초\s]/g, ''));

  if (Number.isNaN(baseSeconds)) {
    return gap;
  }

  const varianceSeed = sessionKey * 7919 + rowIndex * 149 + 37;
  const randomSpan = pseudoRandom(varianceSeed);
  const direction = pseudoRandom(varianceSeed + 17) > 0.45 ? 1 : -1;
  const adjustment = (rowIndex < 6 ? 0.35 : 1.25) * randomSpan * direction;
  const adjusted = Math.max(baseSeconds + adjustment, 0).toFixed(3);

  return `+${adjusted}초`;
};

interface RaceResultPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const RaceResultPage = ({
  appearance,
  setAppearance,
}: RaceResultPageProps) => {
  const [selectedSession, setSelectedSession] = useState(sessionMap[0]);

  const sortedDrivers = useMemo(
    () => [...driverRankingData].sort((a, b) => b.points - a.points),
    []
  );

  const driverById = useMemo(() => {
    return driverRankingData.reduce<Map<string, DriverRanking>>(
      (acc, driver) => acc.set(driver.id, driver),
      new Map<string, DriverRanking>()
    );
  }, []);

  // ✅ 포디엄 데이터 (1~3위)
  const podiumDetails = useMemo<PodiumDriverInfo[]>(() => {
    const fallbackIds = sortedDrivers.slice(0, 3).map((driver) => driver.id);
    const driverIds =
      podiumMockBySession[selectedSession.sessionKey] ?? fallbackIds;

    return driverIds.map((driverId, index) => {
      const fallbackDriver = sortedDrivers[index] ?? sortedDrivers[0];
      const driver = driverById.get(driverId) ?? fallbackDriver;

      return {
        position: index + 1,
        driverName: driver.name,
        englishName: driver.englishName,
        teamName: driver.teamName,
        teamId: driver.teamId as PodiumDriverInfo['teamId'],
        points: driver.points,
        imageUrl: driver.imageUrl,
        teamLogoUrl: driver.teamLogoUrl,
        code: driver.code,
      };
    });
  }, [driverById, selectedSession.sessionKey, sortedDrivers]);

  const tableRowsBySession = useMemo(() => {
    const map = new Map<number, RaceResultRow[]>();

    sessionMap.forEach((session) => {
      const podiumDriverIds =
        podiumMockBySession[session.sessionKey] ??
        sortedDrivers.slice(0, 3).map((driver) => driver.id);

      const podiumSet = new Set(podiumDriverIds);
      const remainingDrivers = shuffleWithSeed(
        sortedDrivers.filter((driver) => !podiumSet.has(driver.id)),
        session.sessionKey * 613
      );

      const raceOrderIds = [
        ...podiumDriverIds,
        ...remainingDrivers.map((driver) => driver.id),
      ];

      const rows: RaceResultRow[] = raceOrderIds.map((driverId, index) => {
        const driver =
          driverById.get(driverId) ?? sortedDrivers[index] ?? sortedDrivers[0];
        const template =
          baseResultTemplate[index] ?? fallbackGapForPosition(index);

        return {
          position: index + 1,
          driverName: driver.name,
          driverCode: driver.code,
          driverImageUrl: driver.imageUrl,
          teamName: driver.teamName,
          teamLogoUrl: driver.teamLogoUrl,
          points: driver.points,
          gap: applyGapVariance(template.gap, session.sessionKey, index),
          status: template.status,
          driverNumber: index + 1,
          teamColor: teamColorById[driver.teamId] ?? '#4C516D',
          tooltip: `${driver.englishName} | ${driver.teamName}`,
        };
      });

      map.set(session.sessionKey, rows);
    });

    return map;
  }, [driverById, sortedDrivers]);

  const tableRows = useMemo(
    () => tableRowsBySession.get(selectedSession.sessionKey) ?? [],
    [selectedSession.sessionKey, tableRowsBySession]
  );

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
            <h2 className={highlightStyles.sectionTitle}>포디엄 하이라이트</h2>
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

import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { sessionMap } from '../data/sessionMap.ts';
import { RaceHeader } from '../components/RaceHeader.tsx';
import { TopDrivers } from '../components/TopDrivers.tsx';
import { RaceResultTable } from '../components/RaceResultTable.tsx';
import { RetirementList } from '../components/RetirementList.tsx';
import { PodiumCard } from '../components/PodiumCard.tsx';
import { RaceResultChart } from '../components/RaceResultChart.tsx';
import { getSessionResult } from '../api/getSessionResult.ts';
import { getDriverInfo } from '../api/getDriverInfo.ts';
import { getMeetingInfo } from '../api/getMeetingInfo.ts';
import { driverNameMap } from '@domain/lapTime/data/driverNameMap.ts';
import { resolveDriverMetadata } from '@domain/grid/data/driverMetadata.ts';
import { getTeamColor } from '@shared/data/teamColors.ts';
import { driverShowcaseLookup } from '../mocks/teamShowcaseData.ts';
import type {
  DriverInfo,
  MeetingInfo,
  RaceSessionMeta,
  SessionResult,
} from '../types.ts';
import * as styles from '../styles/raceResult.css.ts';
import * as highlightStyles from '../styles/highlights.css.ts';

interface RaceResultPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

interface ResolvedDriver {
  name: string;
  englishName: string;
  team: string;
  teamColor: string;
  imageUrl?: string;
  countryCode?: string | null;
}

const normalizeName = (info: DriverInfo | undefined, fallback?: string) => {
  const englishName =
    info?.full_name?.trim() ||
    info?.broadcast_name?.trim() ||
    [info?.first_name, info?.last_name]
      .filter((part): part is string => Boolean(part?.trim()))
      .join(' ')
      .trim() ||
    info?.driver_name?.trim() ||
    fallback ||
    '';

  const localized =
    driverNameMap[englishName.toLowerCase()] ??
    driverNameMap[englishName.replace(/\./g, '').toLowerCase()] ??
    englishName;

  return { englishName, localized };
};

const buildDriverLookup = (drivers: DriverInfo[]) => {
  const map = new Map<number, ResolvedDriver>();

  drivers.forEach((driver) => {
    if (!driver.driver_number) {
      return;
    }

    const metadata = resolveDriverMetadata(driver.driver_number);
    const { englishName, localized } = normalizeName(
      driver,
      metadata?.englishName
    );
    const teamName =
      driver.team_name?.trim() || metadata?.teamName || 'Unknown Team';

    map.set(driver.driver_number, {
      name: localized,
      englishName,
      team: teamName,
      teamColor: metadata?.teamColor ?? getTeamColor(teamName),
      imageUrl: metadata?.imageUrl,
      countryCode: driver.country_code,
    });
  });

  return map;
};

const formatGap = (gap: SessionResult['gap_to_leader']) => {
  if (typeof gap === 'number') {
    return `+${gap.toFixed(3)}s`;
  }

  if (typeof gap === 'string' && gap.trim().length > 0) {
    return gap.startsWith('+') ? gap : `+${gap}`;
  }

  return '리더';
};

const formatDuration = (result: SessionResult) => {
  if (typeof result.time === 'string' && result.time.trim().length > 0) {
    return result.time;
  }

  if (typeof result.duration === 'number' && Number.isFinite(result.duration)) {
    const totalSeconds = Math.abs(result.duration);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toFixed(3).padStart(6, '0')}`;
  }

  return '완주';
};

const classifyStatus = (result: SessionResult) => {
  if (result.dsq) {
    return 'DSQ';
  }
  if (result.dns) {
    return 'DNS';
  }
  if (result.dnf) {
    return 'DNF';
  }
  return 'FIN';
};

const resolveShowcaseEntry = (
  driver?: ResolvedDriver,
  result?: SessionResult,
) => {
  const candidateKeys = new Set<string>();

  if (driver?.englishName) {
    candidateKeys.add(driver.englishName.toLowerCase());
  }

  if (result?.driver_name) {
    candidateKeys.add(result.driver_name.toLowerCase());
  }

  for (const key of Array.from(candidateKeys)) {
    const trimmed = key.replace(/\./g, '').trim();
    if (trimmed.length > 0) {
      candidateKeys.add(trimmed);
      candidateKeys.add(trimmed.replace(/\s+/g, '-'));
    }
  }

  for (const key of candidateKeys) {
    const entry = driverShowcaseLookup.get(key);
    if (entry) {
      return entry;
    }
  }

  return undefined;
};

const deriveDriverCode = (
  result: SessionResult,
  driver?: ResolvedDriver,
  fallback?: string,
) => {
  if (fallback && fallback.trim().length > 0) {
    return fallback;
  }

  const englishName = driver?.englishName;
  if (englishName) {
    const initials = englishName
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase())
      .join('');

    if (initials.length >= 2) {
      return initials.slice(0, 3);
    }
  }

  return `#${result.driver_number}`;
};

export const RaceResultPage = ({
  appearance,
  setAppearance,
}: RaceResultPageProps) => {
  const [selectedSession, setSelectedSession] = useState<RaceSessionMeta>(
    sessionMap[0]
  );

  const {
    data: driverInfo,
    isLoading: isDriverLoading,
    error: driverError,
  } = useQuery<DriverInfo[], Error>({
    queryKey: ['race-result', 'drivers'],
    queryFn: getDriverInfo,
    staleTime: 1000 * 60 * 60 * 6,
    refetchOnWindowFocus: false,
  });

  const driverLookup = useMemo(
    () => (driverInfo ? buildDriverLookup(driverInfo) : new Map()),
    [driverInfo]
  );

  const {
    data: results = [],
    isLoading: isResultLoading,
    isFetching: isResultFetching,
    error: sessionError,
  } = useQuery<SessionResult[], Error>({
    queryKey: ['race-result', 'sessions', selectedSession.sessionKey],
    queryFn: () => getSessionResult(selectedSession.sessionKey),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData ?? [],
  });

  const { data: meetingInfo } = useQuery<MeetingInfo | null, Error>({
    queryKey: ['race-result', 'meeting', selectedSession.meetingKey],
    queryFn: () => getMeetingInfo(selectedSession.meetingKey),
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });

  const errorMessage = useMemo(() => {
    if (sessionError) {
      console.error(sessionError);
      return '경기 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.';
    }

    if (driverError) {
      console.error(driverError);
      return '드라이버 정보를 불러오지 못했습니다. 새로고침 해주세요.';
    }

    return null;
  }, [sessionError, driverError]);

  const isInitialLoading = isDriverLoading || isResultLoading;
  const isUpdating = isResultFetching && !isResultLoading;
  const shouldShowSkeleton = isInitialLoading || (isUpdating && results.length === 0);

  const enrichedDrivers = useMemo(() => {
    const map = new Map(driverLookup);

    results.forEach((result) => {
      if (map.has(result.driver_number)) {
        const current = map.get(result.driver_number)!;
        if (!current.team || current.team === 'Unknown Team') {
          const teamName = result.team_name ?? current.team;
          map.set(result.driver_number, {
            ...current,
            team: teamName,
            teamColor: current.teamColor || getTeamColor(teamName),
          });
        }
        return;
      }

      const metadata = resolveDriverMetadata(result.driver_number);
      const { localized } = normalizeName(undefined, metadata?.englishName);
      const teamName = result.team_name ?? metadata?.teamName ?? 'Unknown Team';

      map.set(result.driver_number, {
        name: localized,
        englishName: metadata?.englishName ?? localized,
        team: teamName,
        teamColor: metadata?.teamColor ?? getTeamColor(teamName),
        imageUrl: metadata?.imageUrl,
      });
    });

    return map;
  }, [driverLookup, results]);
  useMemo(() => {
    const map = new Map<number, { name: string; team?: string }>();
    enrichedDrivers.forEach((value, key) => {
      map.set(key, { name: value.name, team: value.team });
    });
    return map;
  }, [enrichedDrivers]);
  const classifiedResults = useMemo(() => {
    const filtered = results.filter(
      (result) => typeof result.position === 'number'
    );
    return filtered.sort(
      (a, b) =>
        (a.position ?? Number.POSITIVE_INFINITY) -
        (b.position ?? Number.POSITIVE_INFINITY)
    );
  }, [results]);

  const podiumDetails = useMemo(() => {
    return classifiedResults.slice(0, 3).map((result) => {
      const driver = enrichedDrivers.get(result.driver_number);
      const showcase = resolveShowcaseEntry(driver, result);
      const englishName = driver?.englishName ?? result.driver_name ?? '';

      return {
        position: result.position ?? 0,
        driverName: driver?.name ?? `Driver ${result.driver_number}`,
        englishName,
        teamName: driver?.team ?? result.team_name ?? 'Unknown Team',
        teamColor: driver?.teamColor ?? getTeamColor(result.team_name),
        points: Number.isFinite(result.points) ? result.points : 0,
        imageUrl: showcase?.imageUrl ?? driver?.imageUrl,
        teamLogoUrl: showcase?.teamLogoUrl,
        code: deriveDriverCode(result, driver, showcase?.code),
      };
    });
  }, [classifiedResults, enrichedDrivers]);

  const topResults = useMemo(
    () =>
      podiumDetails.map((detail) => ({
        position: detail.position,
        driverName: detail.driverName,
        teamName: detail.teamName,
        points: detail.points,
      })),
    [podiumDetails]
  );

  const chartData = useMemo(
    () =>
      classifiedResults.map((result) => {
        const driver = enrichedDrivers.get(result.driver_number);
        const showcase = resolveShowcaseEntry(driver, result);

        return {
          driverNumber: result.driver_number,
          driverName: driver?.name ?? `Driver ${result.driver_number}`,
          shortCode: deriveDriverCode(result, driver, showcase?.code),
          points: Number.isFinite(result.points) ? result.points : 0,
          position: result.position ?? 0,
          teamColor: driver?.teamColor ?? getTeamColor(result.team_name),
        };
      }),
    [classifiedResults, enrichedDrivers]
  );
  useMemo(() => {
    if (results.length === 0) {
      return [];
    }

    const participants = results.length;
    const finishers = results.filter(
      (item) => !item.dnf && !item.dsq && !item.dns
    ).length;
    const retirements = results.filter((item) => item.dnf).length;
    const averageLaps =
      results.reduce((acc, item) => acc + (item.number_of_laps ?? 0), 0) /
      participants;
    const totalPoints = results.reduce(
      (acc, item) => acc + (Number.isFinite(item.points) ? item.points : 0),
      0
    );

    return [
      {
        label: '참가자 수',
        value: `${participants}명`,
        variant: 'info' as const,
        trend: `완주 ${finishers}명 / 리타이어 ${participants - finishers}명`,
      },
      {
        label: '완주자',
        value: `${finishers}명`,
        variant: 'fin' as const,
        trend: `리타이어 ${retirements}명`,
      },
      {
        label: '리타이어',
        value: `${retirements}명`,
        variant: 'out' as const,
        trend: `비율 ${(participants ? (retirements / participants) * 100 : 0).toFixed(1)}%`,
      },
      {
        label: '평균 완주 랩',
        value: averageLaps.toFixed(1),
        variant: 'info' as const,
      },
      {
        label: '포인트 합계',
        value: totalPoints.toFixed(1),
        variant: 'fin' as const,
      },
    ];
  }, [results]);
  const topDriverHighlights = useMemo(() => {
    return classifiedResults.slice(0, 10).map((result) => {
      const driver = enrichedDrivers.get(result.driver_number);
      const gap = formatGap(result.gap_to_leader);
      const duration = formatDuration(result);

      return {
        position: result.position ?? 0,
        driverName: driver?.name ?? `Driver ${result.driver_number}`,
        teamName: driver?.team ?? result.team_name ?? 'Unknown Team',
        points: Number.isFinite(result.points) ? result.points : 0,
        gapToLeader: gap,
        totalTime: duration,
        teamColor: driver?.teamColor ?? getTeamColor(result.team_name),
        imageUrl: driver?.imageUrl,
      };
    });
  }, [classifiedResults, enrichedDrivers]);

  const tableRows = useMemo(() => {
    return results.map((result) => {
      const driver = enrichedDrivers.get(result.driver_number);
      const status = classifyStatus(result);
      const gap = status === 'FIN' ? formatGap(result.gap_to_leader) : status;
      const tooltip = [
        `드라이버 No.${result.driver_number}`,
        driver?.englishName,
        driver?.countryCode ? `국가: ${driver.countryCode}` : undefined,
        `팀: ${driver?.team ?? result.team_name ?? 'Unknown Team'}`,
        `랩: ${result.number_of_laps}`,
      ]
        .filter(Boolean)
        .join(' | ');

      return {
        position: result.position,
        driverName: driver?.name ?? `Driver ${result.driver_number}`,
        teamName: driver?.team ?? result.team_name ?? 'Unknown Team',
        points: Number.isFinite(result.points) ? result.points : 0,
        laps: result.number_of_laps,
        gap,
        status,
        time: formatDuration(result),
        driverNumber: result.driver_number,
        teamColor: driver?.teamColor ?? getTeamColor(result.team_name),
        tooltip,
      };
    });
  }, [results, enrichedDrivers]);

  const retirementEntries = useMemo(() => {
    return results
      .filter((result) => result.dnf || result.dsq)
      .map((result) => {
        const driver = enrichedDrivers.get(result.driver_number);
        return {
          driverName: driver?.name ?? `Driver ${result.driver_number}`,
          teamName: driver?.team ?? result.team_name ?? 'Unknown Team',
          lap: result.number_of_laps,
          reason: result.dsq ? '실격' : '리타이어',
          teamColor: driver?.teamColor ?? getTeamColor(result.team_name),
        };
      });
  }, [results, enrichedDrivers]);

  const handleSessionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const sessionKey = Number(event.target.value);
    const next = sessionMap.find(
      (session) => session.sessionKey === sessionKey
    );
    if (next) {
      setSelectedSession(next);
    }
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
          <RaceHeader
            meta={selectedSession}
            meetingInfo={meetingInfo}
            topResults={topResults}
          />
        </div>

        <div className={styles.controlsRow}>
          <label
            htmlFor="race-session-select"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Grand Prix 선택
          </label>
          <select
            id="race-session-select"
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

        {errorMessage ? (
          <div className={styles.errorState}>
            <span>{errorMessage}</span>
            <span style={{ fontSize: 13, opacity: 0.8 }}>
              네트워크 상태를 확인하거나 새로고침 후 다시 시도해주세요.
            </span>
          </div>
        ) : null}

        {shouldShowSkeleton ? (
          <div className={highlightStyles.section} aria-hidden>
            <div className={highlightStyles.podiumSkeletonRow}>
              <div className={highlightStyles.skeletonCard} />
              <div className={highlightStyles.skeletonCard} />
              <div className={highlightStyles.skeletonCard} />
            </div>
            <div className={highlightStyles.chartWrapper}>
              <div className={highlightStyles.skeletonChart} />
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className={styles.emptyState}>표시할 경기 결과가 없습니다.</div>
        ) : (
          <>
            <section
              className={highlightStyles.section}
              aria-live="polite"
              aria-busy={isUpdating}
            >
              <span className={highlightStyles.srOnly}>
                {isUpdating
                  ? '새로운 세션 데이터를 불러오는 중입니다.'
                  : '포디엄 결과가 업데이트되었습니다.'}
              </span>
              <div className={highlightStyles.sectionHeader}>
                <h2 className={highlightStyles.sectionTitle}>포디엄 하이라이트</h2>
                <p className={highlightStyles.sectionCaption}>
                  {selectedSession.grandPrix} 상위 3명 결과
                </p>
              </div>
              <div className={highlightStyles.podiumGrid}>
                {podiumDetails.length > 0 ? (
                  podiumDetails.map((entry) => (
                    <PodiumCard key={entry.position} {...entry} />
                  ))
                ) : (
                  <div className={styles.emptyState} style={{ minHeight: 120 }}>
                    포디엄 정보를 찾을 수 없습니다.
                  </div>
                )}
              </div>
            </section>
            <div className={highlightStyles.chartWrapper} aria-live="polite">
              <RaceResultChart
                data={chartData}
                title="레이스 포인트 분포"
                subtitle={`${selectedSession.grandPrix} 참가 드라이버 포인트 비교`}
              />
            </div>
            <TopDrivers drivers={topDriverHighlights} />
            <RaceResultTable rows={tableRows} />
            <RetirementList entries={retirementEntries} />
          </>
        )}
      </div>
      <Footer />
    </MainContainer>
  );
};

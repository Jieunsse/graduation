import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { sessionMap } from '../data/sessionMap.ts';
import { RaceHeader } from '../components/RaceHeader.tsx';
import { TopDrivers } from '../components/TopDrivers.tsx';
import { RaceResultTable } from '../components/RaceResultTable.tsx';
import { RetirementList } from '../components/RetirementList.tsx';
import { getSessionResult } from '../api/getSessionResult.ts';
import { getDriverInfo } from '../api/getDriverInfo.ts';
import { getMeetingInfo } from '../api/getMeetingInfo.ts';
import { getTeamStats } from '../api/getTeamStats.ts';
import { driverNameMap } from '@domain/lapTime/data/driverNameMap.ts';
import { resolveDriverMetadata } from '@domain/grid/data/driverMetadata.ts';
import { getTeamColor } from '@shared/data/teamColors.ts';
import type {
  DriverInfo,
  MeetingInfo,
  RaceSessionMeta,
  SessionResult,
} from '../types.ts';
import * as styles from '../styles/raceResult.css.ts';

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

export const RaceResultPage = ({
  appearance,
  setAppearance,
}: RaceResultPageProps) => {
  const [selectedSession, setSelectedSession] = useState<RaceSessionMeta>(
    sessionMap[0]
  );
  const [results, setResults] = useState<SessionResult[]>([]);
  const [meetingInfo, setMeetingInfo] = useState<MeetingInfo | null>(null);
  const [driverLookup, setDriverLookup] = useState<Map<number, ResolvedDriver>>(
    new Map()
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadDrivers = async () => {
      try {
        const driverInfo = await getDriverInfo();
        if (!cancelled) {
          setDriverLookup(buildDriverLookup(driverInfo));
        }
      } catch (cause) {
        console.error(cause);
        if (!cancelled) {
          setError('드라이버 정보를 불러오지 못했습니다. 새로고침 해주세요.');
        }
      }
    };

    loadDrivers();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadSession = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [sessionResult, meeting] = await Promise.all([
          getSessionResult(selectedSession.sessionKey),
          getMeetingInfo(selectedSession.meetingKey),
        ]);

        if (cancelled) {
          return;
        }

        setResults(sessionResult);
        setMeetingInfo(meeting);
      } catch (cause) {
        console.error(cause);
        if (!cancelled) {
          setError(
            '경기 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.'
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadSession();

    return () => {
      cancelled = true;
    };
  }, [selectedSession]);

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

  const driverMetaForStats = useMemo(() => {
    const map = new Map<number, { name: string; team?: string }>();
    enrichedDrivers.forEach((value, key) => {
      map.set(key, { name: value.name, team: value.team });
    });
    return map;
  }, [enrichedDrivers]);

  const teamStats = useMemo(
    () => getTeamStats(results, driverMetaForStats),
    [results, driverMetaForStats]
  );

  const topResults = useMemo(() => {
    return results
      .filter((result) => typeof result.position === 'number')
      .slice(0, 3)
      .map((result) => {
        const driver = enrichedDrivers.get(result.driver_number);
        return {
          position: result.position ?? 0,
          driverName: driver?.name ?? `Driver ${result.driver_number}`,
          teamName: driver?.team ?? result.team_name ?? 'Unknown Team',
          points: Number.isFinite(result.points) ? result.points : 0,
        };
      });
  }, [results, enrichedDrivers]);
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
    return results
      .filter((result) => typeof result.position === 'number')
      .slice(0, 10)
      .map((result) => {
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
  }, [results, enrichedDrivers]);
  useMemo(() => {
    return teamStats.map((team) => ({
      teamName: team.teamName,
      totalPoints: team.totalPoints,
      finishers: team.finishers,
      drivers: team.drivers.map((driver) => driver.name),
      color: getTeamColor(team.teamName),
    }));
  }, [teamStats]);
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
  useMemo(() => {
    const finishers = results.filter(
      (item) => !item.dnf && !item.dsq && !item.dns
    ).length;
    const retirements = results.filter((item) => item.dnf).length;
    const averageLaps =
      results.length > 0
        ? (
            results.reduce((acc, item) => acc + (item.number_of_laps ?? 0), 0) /
            results.length
          ).toFixed(1)
        : '0.0';
    const totalPoints = results
      .reduce(
        (acc, item) => acc + (Number.isFinite(item.points) ? item.points : 0),
        0
      )
      .toFixed(1);

    return { finishers, retirements, averageLaps, totalPoints };
  }, [results]);
  const handleSessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

        {error ? (
          <div className={styles.errorState}>
            <span>{error}</span>
            <span style={{ fontSize: 13, opacity: 0.8 }}>
              네트워크 상태를 확인하거나 새로고침 후 다시 시도해주세요.
            </span>
          </div>
        ) : null}

        {isLoading ? (
          <div className={styles.loadingState}>로딩중...</div>
        ) : results.length === 0 ? (
          <div className={styles.emptyState}>표시할 경기 결과가 없습니다.</div>
        ) : (
          <>
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

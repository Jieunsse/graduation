import React, { FormEvent, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  TeamPerformance,
  fetchTeamPerformance,
  mockTeamStats,
} from '../api/teamPerformance.ts';
import * as styles from '../styles/TeamPerformanceDashboard.css.ts';

const highlightOrder = ['gold', 'silver', 'bronze'] as const;
type HighlightVariant = (typeof highlightOrder)[number];

const formatAverage = (value: number) => value.toFixed(2);

const determineHighlight = (index: number): HighlightVariant | null => {
  return highlightOrder[index] ?? null;
};

export const TeamPerformanceDashboard = () => {
  const [sessionKey, setSessionKey] = useState('');
  const [activeSessionKey, setActiveSessionKey] = useState('');

  const {
    data,
    isFetching,
    isError,
    error,
  } = useQuery<TeamPerformance[], Error>({
    queryKey: ['teamPerformance', activeSessionKey],
    queryFn: () => fetchTeamPerformance(activeSessionKey),
    enabled: Boolean(activeSessionKey),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const performanceData = useMemo(() => {
    if (data && data.length > 0) {
      return data;
    }
    return mockTeamStats;
  }, [data]);

  const sortedTeams = useMemo(
    () => [...performanceData].sort((a, b) => a.averagePosition - b.averagePosition),
    [performanceData]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActiveSessionKey(sessionKey.trim());
  };

  const statusMessage = useMemo(() => {
    if (isFetching) {
      return '팀 데이터를 불러오는 중...';
    }

    if (activeSessionKey && data && data.length === 0) {
      return '선택한 세션에 대한 팀 데이터를 찾을 수 없습니다. 다른 세션 키를 시도해보세요.';
    }

    if (!activeSessionKey) {
      return '세션 키를 입력하면 OpenF1 실시간 데이터를 확인할 수 있습니다.';
    }

    return null;
  }, [activeSessionKey, data, isFetching]);

  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <h2 className={styles.title}>Team Performance Dashboard</h2>
        <p className={styles.description}>
          OpenF1 포지션 및 드라이버 데이터를 결합하여 컨스트럭터별 평균 순위,
          최고/최저 순위, 드라이버 구성을 분석합니다. 상위 3개 팀은 평균 순위에
          따라 강조 표시됩니다.
        </p>
      </header>

      <form className={styles.controls} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={sessionKey}
          onChange={(event) => setSessionKey(event.target.value)}
          placeholder="세션 키를 입력하세요 (예: 9154)"
          aria-label="세션 키 입력"
        />
        <button className={styles.button} type="submit" disabled={isFetching}>
          데이터 불러오기
        </button>
      </form>

      {statusMessage ? <p className={styles.statusMessage}>{statusMessage}</p> : null}
      {isError ? (
        <p className={styles.errorMessage}>{error?.message ?? '데이터를 불러오는 중 오류가 발생했습니다.'}</p>
      ) : null}

      <div className={styles.grid}>
        {sortedTeams.map((team, index) => {
          const highlight = determineHighlight(index);
          const highlightClass = highlight
            ? styles.cardHighlight[highlight]
            : undefined;

          const className = [styles.card, highlightClass]
            .filter(Boolean)
            .join(' ');

          return (
            <article key={team.teamName} className={className}>
              {highlight ? (
                <span className={styles.rankBadge} aria-label={`${index + 1}위`}>
                  {index + 1}
                </span>
              ) : null}
              <h3 className={styles.teamName}>{team.teamName}</h3>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>평균 순위</span>
                  <span className={styles.metricValue}>
                    {formatAverage(team.averagePosition)}
                  </span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>최고 순위</span>
                  <span className={styles.metricValue}>{team.bestPosition}</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>최저 순위</span>
                  <span className={styles.metricValue}>{team.worstPosition}</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>드라이버 수</span>
                  <span className={styles.metricValue}>{team.driverCount}명</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

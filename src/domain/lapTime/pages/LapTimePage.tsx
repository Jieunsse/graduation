import { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useLapTimeData } from '@domain/lapTime/hooks/useLapTimeData.ts';
import { useRaceSessions } from '@domain/lapTime/hooks/useRaceSessions.ts';
import {
  LapTimeChart,
  type LapChartPoint,
} from '@domain/lapTime/components/LapTimeChart.tsx';
import { ChartOptions } from '@domain/lapTime/components/ChartOptions.tsx';
import {
  DriverSelector,
  type DriverOption,
} from '@domain/lapTime/components/DriverSelector.tsx';
import { RaceSelector } from '@domain/lapTime/components/RaceSelector.tsx';
import type { LapTime, LapTimeUnit } from '@domain/lapTime/types/lapTime.ts';
import * as styles from '@domain/lapTime/styles/chart.css.ts';

interface LapTimePageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const TARGET_YEAR = 2025;

const colorPalette = [
  '#6366F1',
  '#F97316',
  '#22C55E',
  '#EC4899',
  '#14B8A6',
  '#F59E0B',
  '#3B82F6',
  '#8B5CF6',
  '#EF4444',
  '#0EA5E9',
  '#A855F7',
  '#10B981',
];

const assignDriverColors = (drivers: string[]): Record<string, string> => {
  const map: Record<string, string> = {};
  drivers.forEach((driver, index) => {
    map[driver] = colorPalette[index % colorPalette.length];
  });
  return map;
};

const convertUnit = (time: number, unit: LapTimeUnit) =>
  unit === 'seconds' ? time : time / 60;

const buildChartData = (laps: LapTime[], unit: LapTimeUnit): LapChartPoint[] => {
  const lapMap = new Map<number, LapChartPoint>();

  laps.forEach((lap) => {
    const converted = convertUnit(lap.time, unit);
    const existing = lapMap.get(lap.lap) ?? { lap: lap.lap };
    existing[lap.driver] = converted;
    lapMap.set(lap.lap, existing);
  });

  return Array.from(lapMap.values()).sort((a, b) => a.lap - b.lap);
};

export const LapTimePage = ({ appearance, setAppearance }: LapTimePageProps) => {
  const {
    data: sessions = [],
    isLoading: isSessionsLoading,
    isError: isSessionsError,
    error: sessionsError,
  } = useRaceSessions(TARGET_YEAR);

  const [selectedSessionKey, setSelectedSessionKey] = useState<number | undefined>();

  useEffect(() => {
    if (sessions.length === 0 || typeof selectedSessionKey === 'number') {
      return;
    }
    setSelectedSessionKey(sessions[0]?.sessionKey);
  }, [sessions, selectedSessionKey]);

  const {
    data: lapTimes = [],
    isLoading: isLapTimesLoading,
    isError: isLapTimesError,
    error: lapTimesError,
  } = useLapTimeData(selectedSessionKey);

  const [includePitLaps, setIncludePitLaps] = useState(false);
  const [unit, setUnit] = useState<LapTimeUnit>('seconds');
  const [cutOffRatio, setCutOffRatio] = useState(1.3);
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);

  useEffect(() => {
    setSelectedDrivers([]);
  }, [selectedSessionKey]);

  useEffect(() => {
    if (lapTimes.length === 0) {
      return;
    }
    setSelectedDrivers((prev) => {
      if (prev.length > 0) {
        return prev;
      }
      const uniqueDrivers = Array.from(
        new Set(lapTimes.map((lap) => lap.driver)),
      ).slice(0, 6);
      return uniqueDrivers;
    });
  }, [lapTimes]);

  const driverColors = useMemo(() => {
    const uniqueDrivers = Array.from(
      new Set(lapTimes.map((lap) => lap.driver)),
    );
    return assignDriverColors(uniqueDrivers);
  }, [lapTimes]);

  const driverOptions: DriverOption[] = useMemo(() => {
    const unique = new Map<string, string>();
    lapTimes.forEach((lap) => {
      if (!unique.has(lap.driver)) {
        unique.set(lap.driver, lap.team);
      }
    });
    return Array.from(unique.entries()).map(([driver, team]) => ({
      name: driver,
      team,
      color: driverColors[driver] ?? '#6366F1',
    }));
  }, [lapTimes, driverColors]);

  const filteredLapTimes = useMemo(() => {
    if (lapTimes.length === 0) {
      return [] as LapTime[];
    }

    let filtered = includePitLaps
      ? lapTimes
      : lapTimes.filter((lap) => !lap.isPitLap);

    if (selectedDrivers.length > 0) {
      filtered = filtered.filter((lap) =>
        selectedDrivers.includes(lap.driver),
      );
    }

    if (filtered.length === 0) {
      return filtered;
    }

    const fastest = filtered.reduce(
      (min, lap) => (lap.time < min ? lap.time : min),
      filtered[0].time,
    );

    const threshold = fastest * cutOffRatio;

    return filtered.filter((lap) => lap.time <= threshold);
  }, [lapTimes, includePitLaps, selectedDrivers, cutOffRatio]);

  const fastestLap = useMemo(() => {
    if (filteredLapTimes.length === 0) {
      return undefined;
    }
    return filteredLapTimes.reduce(
      (min, lap) => (lap.time < min ? lap.time : min),
      filteredLapTimes[0].time,
    );
  }, [filteredLapTimes]);

  const chartData = useMemo(() => {
    const activeDrivers = driverOptions.filter((driver) =>
      selectedDrivers.includes(driver.name),
    );

    if (filteredLapTimes.length === 0 || activeDrivers.length === 0) {
      return [];
    }

    return buildChartData(filteredLapTimes, unit);
  }, [filteredLapTimes, driverOptions, selectedDrivers, unit]);

  const activeDriverOptions = driverOptions.filter((driver) =>
    selectedDrivers.includes(driver.name),
  );

  const handleToggleDriver = (driver: string, selected: boolean) => {
    setSelectedDrivers((prev) => {
      if (selected) {
        return Array.from(new Set([...prev, driver]));
      }
      return prev.filter((item) => item !== driver);
    });
  };

  const isReadyForLapTimes = typeof selectedSessionKey === 'number';
  const isLoading = isSessionsLoading || isLapTimesLoading || !isReadyForLapTimes;
  const isError = isSessionsError || isLapTimesError;
  const errorMessage = isSessionsError
    ? sessionsError
    : isLapTimesError
      ? lapTimesError
      : undefined;
  const errorText = errorMessage
    ? String(errorMessage)
    : '알 수 없는 오류가 발생했습니다.';

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />
      <section className={styles.container}>
        <div className={styles.chartPanel}>
          <div className={styles.chartHeader}>
            <div>
              <h1 className={styles.chartTitle}>랩타임 비교</h1>
              <p style={{ opacity: 0.7 }}>
                OpenF1 데이터를 기반으로 세션 내 드라이버의 랩타임 변화를 비교합니다.
              </p>
            </div>
            {isLoading ? (
              <div role="status" aria-live="polite" style={{ fontSize: 13 }}>
                데이터 동기화 중...
              </div>
            ) : null}
          </div>

          <RaceSelector
            sessions={sessions}
            selectedSessionKey={selectedSessionKey}
            onChange={setSelectedSessionKey}
            isLoading={isSessionsLoading}
          />

          <ChartOptions
            includePitLaps={includePitLaps}
            onIncludePitLapsChange={setIncludePitLaps}
            unit={unit}
            onUnitChange={setUnit}
            cutOffRatio={cutOffRatio}
            onCutOffRatioChange={setCutOffRatio}
            fastestLap={fastestLap}
          />
          <DriverSelector
            drivers={driverOptions}
            selectedDrivers={selectedDrivers}
            onToggleDriver={handleToggleDriver}
          />

          {isLoading ? (
            <div className={styles.emptyState} role="status" aria-live="polite">
              랩타임 데이터를 불러오는 중입니다...
            </div>
          ) : null}

          {isError ? (
            <div className={styles.emptyState} role="alert">
              데이터를 불러오지 못했습니다. {errorText}
            </div>
          ) : null}

          {!isLoading && !isError ? (
            <LapTimeChart
              data={chartData}
              drivers={activeDriverOptions}
              unit={unit}
            />
          ) : null}
        </div>
      </section>
      <Footer />
    </MainContainer>
  );
};

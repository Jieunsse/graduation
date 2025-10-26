import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useLapTimeData } from '@domain/lapTime/hooks/useLapTimeData.ts';
import {
  type LapChartPoint,
  LapTimeChart,
} from '@domain/lapTime/components/LapTimeChart.tsx';
import { ChartOptions } from '@domain/lapTime/components/ChartOptions.tsx';
import {
  type DriverOption,
  DriverSelector,
} from '@domain/lapTime/components/DriverSelector.tsx';
import type { LapTime, LapTimeUnit } from '@domain/lapTime/types/lapTime.ts';
import * as styles from '@domain/lapTime/styles/chart.css.ts';

interface LapTimePageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const DEFAULT_SESSION_KEY = 9158;

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

const buildChartData = (
  laps: LapTime[],
  unit: LapTimeUnit
): LapChartPoint[] => {
  const lapMap = new Map<number, LapChartPoint>();

  laps.forEach((lap) => {
    const converted = convertUnit(lap.time, unit);
    const existing = lapMap.get(lap.lap) ?? { lap: lap.lap };
    existing[lap.driver] = converted;
    lapMap.set(lap.lap, existing);
  });

  return Array.from(lapMap.values()).sort((a, b) => a.lap - b.lap);
};

export const LapTimePage = ({
  appearance,
  setAppearance,
}: LapTimePageProps) => {
  const {
    data: lapTimes = [],
    isLoading,
    isError,
    error,
  } = useLapTimeData(DEFAULT_SESSION_KEY);

  const [includePitLaps, setIncludePitLaps] = useState(false);
  const [unit, setUnit] = useState<LapTimeUnit>('seconds');
  const [cutOffRatio, setCutOffRatio] = useState(1.3);
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);

  useEffect(() => {
    if (lapTimes.length === 0) {
      return;
    }
    setSelectedDrivers((prev) => {
      if (prev.length > 0) {
        return prev;
      }
      return Array.from(new Set(lapTimes.map((lap) => lap.driver))).slice(0, 6);
    });
  }, [lapTimes]);

  const driverColors = useMemo(() => {
    const uniqueDrivers = Array.from(
      new Set(lapTimes.map((lap) => lap.driver))
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
      filtered = filtered.filter((lap) => selectedDrivers.includes(lap.driver));
    }

    if (filtered.length === 0) {
      return filtered;
    }

    const fastest = filtered.reduce(
      (min, lap) => (lap.time < min ? lap.time : min),
      filtered[0].time
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
      filteredLapTimes[0].time
    );
  }, [filteredLapTimes]);

  const chartData = useMemo(() => {
    const activeDrivers = driverOptions.filter((driver) =>
      selectedDrivers.includes(driver.name)
    );

    if (filteredLapTimes.length === 0 || activeDrivers.length === 0) {
      return [];
    }

    return buildChartData(filteredLapTimes, unit);
  }, [filteredLapTimes, driverOptions, selectedDrivers, unit]);

  const activeDriverOptions = driverOptions.filter((driver) =>
    selectedDrivers.includes(driver.name)
  );

  const handleToggleDriver = (driver: string, selected: boolean) => {
    setSelectedDrivers((prev) => {
      if (selected) {
        return Array.from(new Set([...prev, driver]));
      }
      return prev.filter((item) => item !== driver);
    });
  };

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />
      <section className={styles.container}>
        <div className={styles.chartPanel}>
          <div className={styles.chartHeader}>
            <div>
              <h1 className={styles.chartTitle}>랩타임 비교</h1>
              <p style={{ opacity: 0.7 }}>
                OpenF1 데이터를 기반으로 세션 내 드라이버의 랩타임 변화를
                비교합니다.
              </p>
            </div>
            {isLoading ? (
              <div role="status" aria-live="polite" style={{ fontSize: 13 }}>
                데이터 동기화 중...
              </div>
            ) : null}
          </div>

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
              데이터를 불러오지 못했습니다. {String(error)}
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

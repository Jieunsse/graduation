import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useGridStore } from '@domain/grid/store/useGridStore.ts';
import {
  GridList,
  type GridListItem,
} from '@domain/grid/components/GridList.tsx';
import { RaceSelector } from '@domain/grid/components/RaceSelector.tsx';
import {
  DEFAULT_RACE_KEY,
  getRaceGridItems,
  raceOptions,
  type RaceKey,
} from '@domain/grid/data/raceGridData.ts';
import * as styles from '@domain/grid/styles/gridPage.css.ts';

interface StartingGridPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const StartingGridPage = ({
  appearance,
  setAppearance,
}: StartingGridPageProps) => {
  const maxPosition = useGridStore((state) => state.maxPosition);
  const setMaxPosition = useGridStore((state) => state.setMaxPosition);
  const [selectedRace, setSelectedRace] = useState<RaceKey>(DEFAULT_RACE_KEY);
  const [raceItems, setRaceItems] = useState<GridListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = window.setTimeout(() => {
      const nextItems = getRaceGridItems(selectedRace);
      setRaceItems(nextItems);
      setIsLoading(false);
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [selectedRace]);

  const items: GridListItem[] = useMemo(
    () => raceItems.slice(0, maxPosition),
    [raceItems, maxPosition]
  );

  const selectedRaceLabel = useMemo(
    () =>
      raceOptions.find((option) => option.key === selectedRace)?.label ??
      '선택된 경기',
    [selectedRace]
  );

  const status =
    !isLoading && items.length === 0
      ? {
          type: 'empty' as const,
          message: '표시할 스타팅 그리드 데이터가 없습니다.',
        }
      : undefined;

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>스타팅 그리드</h1>
          <p className={styles.heroDescription}>
            경기별로 스타팅 그리드 순서를 확인할 수 있습니다.
          </p>

          <div className={styles.controls}>
            <RaceSelector
              options={raceOptions}
              value={selectedRace}
              onChange={(raceKey) => setSelectedRace(raceKey)}
            />
            <div className={styles.controlButtonGroup}>
              {[10, 20].map((value) => {
                const variant =
                  maxPosition === value ? 'active' : ('inactive' as const);
                return (
                  <button
                    key={`grid-control-${value}`}
                    type="button"
                    className={styles.controlButtonVariants[variant]}
                    onClick={() => setMaxPosition(value)}
                  >
                    {value === 20 ? '전체 보기' : `TOP ${value}`}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.sectionHeader}>
            <h2
              className={styles.sectionTitle}
            >{`${selectedRaceLabel} - TOP ${maxPosition} 스타팅 그리드`}</h2>
          </div>

          <GridList items={items} isLoading={isLoading} status={status} />
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};

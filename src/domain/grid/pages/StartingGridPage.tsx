import React, { useMemo } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useGridStore } from '@domain/grid/store/useGridStore.ts';
import {
  fallbackGridData,
  resolveDriverMetadata,
} from '@domain/grid/data/driverMetadata.ts';
import {
  GridList,
  type GridListItem,
} from '@domain/grid/components/GridList.tsx';
import * as styles from '@domain/grid/styles/gridPage.css.ts';

interface StartingGridPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const StartingGridPage = ({
  appearance,
  setAppearance,
}: StartingGridPageProps) => {
  const sessionKey = useGridStore((state) => state.sessionKey);
  const maxPosition = useGridStore((state) => state.maxPosition);
  const setMaxPosition = useGridStore((state) => state.setMaxPosition);

  // ✅ API 제거 → 항상 fallbackGridData 사용
  const baseData = useMemo(() => fallbackGridData, []);

  const items: GridListItem[] = useMemo(
    () =>
      baseData.slice(0, maxPosition).map(({ position, driver_number }) => {
        const meta = resolveDriverMetadata(driver_number);
        const driverName = meta?.koreanName ?? `드라이버 ${driver_number}`;
        const teamName = meta?.teamName ?? '팀 정보 없음';
        const teamColor = meta?.teamColor ?? '#7B61FF';
        const imageUrl =
          meta?.imageUrl ??
          'https://via.placeholder.com/320x480/0f172a/ffffff?text=Driver';

        return {
          position,
          driverNumber: driver_number,
          driverName,
          teamName,
          teamColor,
          imageUrl,
        };
      }),
    [baseData, maxPosition]
  );

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>{`SESSION ${sessionKey}`}</span>
            <span>{`TOP ${maxPosition}`}</span>
          </div>

          <h1 className={styles.heroTitle}>스타팅 그리드</h1>
          <p className={styles.heroDescription}>
            경기별로 스타팅 그리드 순서를 확인할 수 있습니다.
          </p>

          <div className={styles.controls}>
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
        </section>

        <section className={styles.gridSection}>
          <div className={styles.sectionHeader}>
            <h2
              className={styles.sectionTitle}
            >{`TOP ${maxPosition} 스타팅 그리드`}</h2>
          </div>

          <GridList items={items} isLoading={false} skeletonCount={0} />
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};

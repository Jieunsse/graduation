import React, { useMemo } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useStartingGridQuery } from '@domain/grid/hooks/useStartingGridQuery.ts';
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

  const { data, isLoading, isError } = useStartingGridQuery();

  const baseData = useMemo(() => {
    if (data && data.length > 0) {
      return [...data].sort((a, b) => a.position - b.position);
    }

    if (isError) {
      return fallbackGridData;
    }

    return [];
  }, [data, isError]);

  const items: GridListItem[] = useMemo(
    () =>
      baseData
        .slice(0, maxPosition)
        .map(({ position, driver_number }) => {
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

  const showSkeleton = isLoading && baseData.length === 0;
  const status =
    !showSkeleton && items.length === 0
      ? {
          type: isError ? ('error' as const) : ('empty' as const),
          message: isError
            ? '스타팅 그리드를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.'
            : '표시할 스타팅 그리드 데이터가 없습니다.',
        }
      : undefined;

  const usingFallback = isError && baseData.length > 0;

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>{`SESSION ${sessionKey}`}</span>
            <span>{`TOP ${maxPosition}`}</span>
            <span>{usingFallback ? '기본 데이터' : '라이브 데이터'}</span>
          </div>

          <h1 className={styles.heroTitle}>스타팅 그리드</h1>
          <p className={styles.heroDescription}>
            OpenF1 라이브 데이터를 기반으로 레이스의 스타팅 순서를 확인하세요. 드라이버
            사진, 번호, 팀 컬러를 한눈에 비교하며 전략을 세워보세요.
          </p>

          {usingFallback ? (
            <div className={styles.heroAlert}>
              OpenF1 API에 일시적으로 연결할 수 없어 기본 데이터를 표시하고 있습니다.
            </div>
          ) : null}

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
                  {`TOP ${value}`}
                </button>
              );
            })}
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{`TOP ${maxPosition} 스타팅 그리드`}</h2>
            <p className={styles.sectionDescription}>
              드라이버 번호와 팀 컬러를 기준으로 레이스 시작 순서를 정렬했습니다. 각
              카드 위에는 그리드 포지션과 브래킷이 표시되며, 팀명은 고유 색상으로
              강조됩니다.
            </p>
          </div>

          <GridList
            items={items}
            isLoading={showSkeleton}
            skeletonCount={maxPosition}
            status={status}
          />
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};

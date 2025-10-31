import { GridCard } from '@domain/grid/components/GridCard.tsx';
import * as pageStyles from '@domain/grid/styles/gridPage.css.ts';

export interface GridListItem {
  position: number;
  driverNumber: number;
  driverName: string;
  teamName: string;
  teamColor: string;
  imageUrl: string;
}

interface GridListStatus {
  type: 'empty' | 'error';
  message: string;
}

interface GridListProps {
  items: GridListItem[];
  isLoading: boolean;
  skeletonCount?: number;
  status?: GridListStatus;
}

export const GridList = ({
  items,
  isLoading,
  skeletonCount = 20,
  status,
}: GridListProps) => {
  if (isLoading) {
    return (
      <div className={pageStyles.skeletonList} aria-live="polite" aria-busy>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div
            key={`grid-skeleton-${index}`}
            className={pageStyles.skeletonCard}
            aria-hidden
          />
        ))}
      </div>
    );
  }

  if (status && items.length === 0) {
    const className =
      status.type === 'error' ? pageStyles.errorCard : pageStyles.statusCard;
    return <div className={className}>{status.message}</div>;
  }

  return (
    <div className={pageStyles.gridList}>
      {items.map((item) => (
        <GridCard
          key={`${item.position}-${item.driverNumber}`}
          position={item.position}
          driverNumber={item.driverNumber}
          driverName={item.driverName}
          teamName={item.teamName}
          teamColor={item.teamColor}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

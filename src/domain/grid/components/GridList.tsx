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
  status?: GridListStatus;
}

export const GridList = ({
  items,
  isLoading,
  status,
}: GridListProps) => {
  if (isLoading) {
    return (
      <div className={pageStyles.loadingMessage} role="status" aria-live="polite">
        로딩 중…
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

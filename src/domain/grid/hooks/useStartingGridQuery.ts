import { useQuery } from '@tanstack/react-query';
import { getStartingGrid } from '@domain/grid/api/getStartingGrid.ts';
import { useGridStore } from '@domain/grid/store/useGridStore.ts';

export const useStartingGridQuery = () => {
  const sessionKey = useGridStore((state) => state.sessionKey);
  const maxPosition = useGridStore((state) => state.maxPosition);

  return useQuery({
    queryKey: ['starting-grid', sessionKey, maxPosition],
    queryFn: () => getStartingGrid(sessionKey, maxPosition),
    enabled: Number.isFinite(sessionKey) && Number.isFinite(maxPosition),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};

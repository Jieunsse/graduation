import { useQuery } from '@tanstack/react-query';
import { getCarData } from '../api/openF1Api';

export const useCarData = (driverNumber: number) => {
  return useQuery({
    queryKey: ['car-data', driverNumber],
    queryFn: () => getCarData(driverNumber),
    refetchInterval: 3000,
  });
};

import { openF1Client } from '@shared/api/httpClient';

export interface CarData {
  driver_number: number;
  date: string;
  rpm: number;
  speed: number;
  throttle: number;
  brake: number;
  gear: number;
  drs: number;
}

export const getCarData = async (driverNumber: number): Promise<CarData[]> => {
  const response = await openF1Client.get('/car_data', {
    params: {
      driver_number: driverNumber,
      session_key: 'latest',
      limit: 30,
    },
  });

  return response.data;
};

import { openF1Client } from './client.ts';
import type { DriverInfo } from '../types.ts';

export const getDriverInfo = async (): Promise<DriverInfo[]> => {
  const { data } = await openF1Client.get<DriverInfo[]>('/drivers', {
    params: {
      year: 2024,
    },
  });

  const uniqueByNumber = new Map<number, DriverInfo>();

  data.forEach((driver) => {
    if (!driver?.driver_number) {
      return;
    }

    if (!uniqueByNumber.has(driver.driver_number)) {
      uniqueByNumber.set(driver.driver_number, driver);
    }
  });

  return Array.from(uniqueByNumber.values());
};

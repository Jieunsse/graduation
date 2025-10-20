import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface Driver {
  driverId: string;
  teamId: number;
  firstName: string;
  lastName: string;
  carNumber: number;
  nationality: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDriverRequest {
  teamId: number;
  firstName: string;
  lastName: string;
  nationality: string;
  birthdate: string;
  carNumber: number;
}

export type UpdateDriverRequest = Partial<
  Omit<Driver, 'driverId' | 'createdAt' | 'updatedAt'>
>;

export const getAllDrivers = async (): Promise<Driver[]> => {
  const response: AxiosResponse<Driver[]> = await httpClient.get('/driver');
  return response.data;
};

export const getDriverById = async (driverId: number): Promise<Driver> => {
  const response: AxiosResponse<Driver> = await httpClient.get(
    `/driver/${driverId}`
  );
  return response.data;
};

export const createDriver = async (
  payload: CreateDriverRequest
): Promise<Driver> => {
  const response: AxiosResponse<Driver> = await httpClient.post(
    '/driver',
    payload
  );
  return response.data;
};

export const updateDriver = async (
  driverId: number,
  payload: UpdateDriverRequest
): Promise<Driver> => {
  const response: AxiosResponse<Driver> = await httpClient.put(
    `/driver/${driverId}`,
    payload
  );
  return response.data;
};

export const deleteDriver = async (driverId: number): Promise<void> => {
  await httpClient.delete(`/driver/${driverId}`);
};

import type { AxiosResponse } from 'axios';
import { httpClient } from '../../../shared/api/httpClient.ts';

export interface DriverStatus {
  driverStatusId: number;
  raceId: number;
  driverId: number;
  status: string;
  lapNumber: number;
  position: number;
  time: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDriverStatusRequest {
  raceId: number;
  driverId: number;
  status: string;
  lapNumber: number;
  position: number;
  time: string;
}

export type UpdateDriverStatusRequest = Partial<
  Omit<DriverStatus, 'driverStatusId' | 'createdAt' | 'updatedAt'>
>;

export const getAllDriverStatuses = async (): Promise<DriverStatus[]> => {
  const response: AxiosResponse<DriverStatus[]> = await httpClient.get('/driverstatus');
  return response.data;
};

export const getDriverStatusById = async (
  driverStatusId: number
): Promise<DriverStatus> => {
  const response: AxiosResponse<DriverStatus> = await httpClient.get(
    `/driverstatus/${driverStatusId}`
  );
  return response.data;
};

export const createDriverStatus = async (
  payload: CreateDriverStatusRequest
): Promise<DriverStatus> => {
  const response: AxiosResponse<DriverStatus> = await httpClient.post('/driverstatus', payload);
  return response.data;
};

export const updateDriverStatus = async (
  driverStatusId: number,
  payload: UpdateDriverStatusRequest
): Promise<DriverStatus> => {
  const response: AxiosResponse<DriverStatus> = await httpClient.put(
    `/driverstatus/${driverStatusId}`,
    payload
  );
  return response.data;
};

export const deleteDriverStatus = async (driverStatusId: number): Promise<void> => {
  await httpClient.delete(`/driverstatus/${driverStatusId}`);
};

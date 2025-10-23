import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface LapHistory {
  lapHistoryId: number;
  raceId: number;
  driverId: number;
  lapNumber: number;
  lapTime: string;
  sector1Time: string;
  sector2Time: string;
  sector3Time: string;
  createdAt: string;
  updatedAt: string;
  recordedAt: string;
}

export interface CreateLapHistoryRequest {
  raceId: number;
  driverId: number;
  lapNumber: number;
  lapTime: string;
  sector1Time: string;
  sector2Time: string;
  sector3Time: string;
  recordedAt: string;
}

export type UpdateLapHistoryRequest = Partial<
  Omit<LapHistory, 'lapHistoryId' | 'createdAt' | 'updatedAt'>
>;

export const getAllLapHistories = async (): Promise<LapHistory[]> => {
  const response: AxiosResponse<LapHistory[]> =
    await httpClient.get('/laphistory');
  return response.data;
};

export const getLapHistoryById = async (
  lapHistoryId: number
): Promise<LapHistory> => {
  const response: AxiosResponse<LapHistory> = await httpClient.get(
    `/laphistory/${lapHistoryId}`
  );
  return response.data;
};

export const createLapHistory = async (
  payload: CreateLapHistoryRequest
): Promise<LapHistory> => {
  const response: AxiosResponse<LapHistory> = await httpClient.post(
    '/laphistory',
    payload
  );
  return response.data;
};

export const updateLapHistory = async (
  lapHistoryId: number,
  payload: UpdateLapHistoryRequest
): Promise<LapHistory> => {
  const response: AxiosResponse<LapHistory> = await httpClient.put(
    `/laphistory/${lapHistoryId}`,
    payload
  );
  return response.data;
};

export const deleteLapHistory = async (lapHistoryId: number): Promise<void> => {
  await httpClient.delete(`/laphistory/${lapHistoryId}`);
};

import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface Race {
  raceId: number;
  season: number;
  round: number;
  circuitName: string;
  raceDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRaceRequest {
  season: number;
  round: number;
  circuitName: string;
  raceDate: string;
  status: string;
}

export type UpdateRaceRequest = Partial<
  Omit<Race, 'raceId' | 'createdAt' | 'updatedAt'>
>;

export const getAllRaces = async (): Promise<Race[]> => {
  const response: AxiosResponse<Race[]> = await httpClient.get('/race');
  return response.data;
};

export const getRaceById = async (raceId: number): Promise<Race> => {
  const response: AxiosResponse<Race> = await httpClient.get(`/race/${raceId}`);
  return response.data;
};

export const createRace = async (payload: CreateRaceRequest): Promise<Race> => {
  const response: AxiosResponse<Race> = await httpClient.post('/race', payload);
  return response.data;
};

export const updateRace = async (
  raceId: number,
  payload: UpdateRaceRequest
): Promise<Race> => {
  const response: AxiosResponse<Race> = await httpClient.put(
    `/race/${raceId}`,
    payload
  );
  return response.data;
};

export const deleteRace = async (raceId: number): Promise<void> => {
  await httpClient.delete(`/race/${raceId}`);
};

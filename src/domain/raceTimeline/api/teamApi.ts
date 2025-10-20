import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface Team {
  teamId: number;
  teamName: string;
  principal: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  foundedYear: number;
}

export interface CreateTeamRequest {
  teamName: string;
  principal: string;
  country: string;
}

export type UpdateTeamRequest = Partial<
  Omit<Team, 'teamId' | 'createdAt' | 'updatedAt'>
>;

export const getAllTeams = async (): Promise<Team[]> => {
  const response: AxiosResponse<Team[]> = await httpClient.get('/team');
  return response.data;
};

export const getTeamById = async (teamId: number): Promise<Team> => {
  const response: AxiosResponse<Team> = await httpClient.get(`/team/${teamId}`);
  return response.data;
};

export const createTeam = async (payload: CreateTeamRequest): Promise<Team> => {
  const response: AxiosResponse<Team> = await httpClient.post('/team', payload);
  return response.data;
};

export const updateTeam = async (
  teamId: number,
  payload: UpdateTeamRequest
): Promise<Team> => {
  const response: AxiosResponse<Team> = await httpClient.put(
    `/team/${teamId}`,
    payload
  );
  return response.data;
};

export const deleteTeam = async (teamId: number): Promise<void> => {
  await httpClient.delete(`/team/${teamId}`);
};

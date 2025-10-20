import type { AxiosResponse } from 'axios';
import { httpClient } from '../../../shared/api/httpClient.ts';

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role: string;
  status: string;
}

export type UpdateUserRequest = Partial<Omit<User, 'userId' | 'createdAt' | 'updatedAt'>>;

export const getAllUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await httpClient.get('/users');
  return response.data;
};

export const getUserById = async (userId: number): Promise<User> => {
  const response: AxiosResponse<User> = await httpClient.get(`/users/${userId}`);
  return response.data;
};

export const createUser = async (payload: CreateUserRequest): Promise<User> => {
  const response: AxiosResponse<User> = await httpClient.post('/users', payload);
  return response.data;
};

export const updateUser = async (
  userId: number,
  payload: UpdateUserRequest
): Promise<User> => {
  const response: AxiosResponse<User> = await httpClient.put(`/users/${userId}`, payload);
  return response.data;
};

export const deleteUser = async (userId: number): Promise<void> => {
  await httpClient.delete(`/users/${userId}`);
};

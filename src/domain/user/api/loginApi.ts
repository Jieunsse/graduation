import { httpClient } from '@shared/api/httpClient.ts';

interface LoginResponse {
  message: string;
  token: string;
}

export const loginUser = async (username: string, password: string) => {
  const response = await httpClient.post<LoginResponse>('/auth/login', {
    username,
    password,
  });

  return response.data;
};

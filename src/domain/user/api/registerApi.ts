import { httpClient } from '../../../shared/api/httpClient';

interface RegisterResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const response = await httpClient.post<RegisterResponse>('/auth/register', {
    username,
    email,
    password,
  });

  return response.data;
};

import { httpClient } from '@shared/api/httpClient.ts';

export const logoutUser = async () => {
  const token = localStorage.getItem('token');

  await httpClient.post(
    '/auth/logout',
    {},
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  );
};

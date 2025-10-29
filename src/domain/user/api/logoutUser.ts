import { httpClient } from '../../../shared/api/httpClient';

export const logoutUser = async () => {
  const token = localStorage.getItem('token');

  await httpClient.post(
    '/auth/logout',
    {},
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    },
  );
};

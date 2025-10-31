import { httpClient } from '@shared/api/httpClient.ts';

interface LoginResponse {
  message: string;
  token: string;
}

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await httpClient.post<LoginResponse>('/auth/login', {
      username,
      password,
    });

    const { token } = response.data;

    if (!token) {
      console.error('서버 응답에 토큰이 없습니다.', response.data);
      throw new Error('서버로부터 토큰을 받지 못 함');
    }

    localStorage.setItem('accessToken', token);

    return response.data;
  } catch (error: any) {
    console.error('로그인 실패', error.response?.data || error.message);
    throw error;
  }
};

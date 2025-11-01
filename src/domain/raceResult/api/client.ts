import axios from 'axios';

export const openF1Client = axios.create({
  baseURL: 'https://api.openf1.org/v1',
  timeout: 10000,
});

openF1Client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          `OpenF1 API 요청이 실패했습니다. (status: ${error.response.status})`,
      );
    }

    if (error.request) {
      throw new Error('OpenF1 API 응답이 없습니다. 네트워크 상태를 확인해주세요.');
    }

    throw error;
  },
);

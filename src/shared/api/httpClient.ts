import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/api';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('🔐 JWT attached:', config.headers.Authorization);
  } else {
    console.warn('⚠️ No token found in localStorage');
  }
  return config;
});

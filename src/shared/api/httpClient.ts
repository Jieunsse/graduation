import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/api';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://gamestore-backend.vercel.app/api';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;

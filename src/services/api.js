import axios from 'axios';
import { getjwt } from './jwtService';
const api = axios.create({
  baseURL: 'https://simulatrade.ceuvago.com/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(
  config => {
    const jwt = getjwt();
    if (jwt) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${jwt}`;
    }
    return config;
  },
  error => console.error(error)
);

export default api;

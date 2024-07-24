import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

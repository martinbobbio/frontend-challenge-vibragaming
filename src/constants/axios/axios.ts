import axios from 'axios';

const api = axios.create({
  // baseURL: import.meta.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  baseURL:
    import.meta.env.REACT_APP_API_URL ||
    'https://backend-challenge-vibragaming.vercel.app/api',
});

export default api;

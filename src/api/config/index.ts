import axios from 'axios';

export const API_INSTANCE = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

import axios from 'axios';

import { API_BASE_URL } from '../lib/constants';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

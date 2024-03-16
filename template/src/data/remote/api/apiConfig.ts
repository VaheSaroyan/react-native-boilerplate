import axios from 'axios';
import Config from 'react-native-config';
import { v4 } from 'uuid';

import { handleError, memoizedRefreshToken } from './utils';
import { AuthStorage } from '../../local/domains/Auth';
import { AuthApi } from '../domains/Auth';

const { API_URL } = Config;

export const axiosUtility = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

/**
 * Public instance that we use for requesting public resources
 *
 */
export const axiosPublic = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

axiosPublic.interceptors.response.use(
  response => response,
  async error => {
    const failedUrl = error?.response?.config?.url;
    if (failedUrl === AuthApi.tokenRefreshPath) {
      console.log('::: token refresh failed :::');
      const handled = handleError(error);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ ...handled, meta: 'refresh-token' });
    }

    const handled = handleError(error);
    console.log('::: catch HTTP error (public) :::', handled);
    return Promise.reject(handled);
  }
);

/**
 * Config for default (private) axios instance
 *
 */
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 15000;
axios.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
/**
 * Request interceptors config.
 * Set Authorization and other header here before request is done
 *
 */
axios.interceptors.request.use(
  async config => {
    const token = await AuthStorage.getAccessToken();

    config.headers['X-Correlation-Id'] = v4();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

/**
 * Response interceptors config.
 * Handle token refresh, response and errors here
 *
 */
axios.interceptors.response.use(
  response => response,
  async error => {
    const config = error?.config;
    const errResponse = error?.response;
    const failedUrl = error?.response?.config?.url ?? error?.config?.url;

    if (errResponse?.status === 401 && !config?.sent) {
      console.log('::: catch HTTP error 401 :::', failedUrl);
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result) {
        console.log('::: catch HTTP error 401 (result)  :::', result);
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${result.accessToken}`
        };
      } else {
        // refresh failed, public request interceptor should handle
        console.log('::: catch HTTP error 401 (result - null)  :::', result);
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          code: 401,
          message: 'Missing refresh token',
          meta: 'refresh-token'
        });
      }

      return axios(config);
    }

    const handled = handleError(error);
    console.log('::: catch HTTP error :::', handled);
    console.log('::: catch HTTP error (URL) :::', failedUrl);
    return Promise.reject(handled);
  }
);

export const axiosPrivate = axios;

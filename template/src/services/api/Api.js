import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import Config from 'react-native-config';

import { setAuth, signOut } from '~/modules/user/actions';
import { store } from '~/store';

const { API_BASE, REFRESH_TOKEN_URL } = Config;

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: AxiosError | null, token: string): void => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const setTokenInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = store.getState().user.auth?.access;
      if (token) {
        config.headers = {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => Promise.reject(error),
  );
  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        !originalRequest.retry &&
        originalRequest.url !== REFRESH_TOKEN_URL
      ) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(token => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return instance(originalRequest);
            })
            .catch(err => Promise.reject(err));
        }

        originalRequest.retry = true;
        isRefreshing = true;

        return new Promise((resolve, reject) => {
          instance
            .post(REFRESH_TOKEN_URL, {
              refresh: store.getState().user.auth?.refresh,
            })
            .then(({ data }: AxiosResponse<{ access: string; refresh: string }>) => {
              store.dispatch(setAuth({ access: data.access, refresh: data.refresh }));
              instance.defaults.headers.common.Authorization = `Bearer ${data.access}`;
              originalRequest.headers.Authorization = `Bearer ${data.access}`;

              processQueue(null, data.access);
              resolve(instance(originalRequest));
            })
            .catch((err: any) => {
              processQueue(err, '');
              store.dispatch(signOut());
              reject(err);
            })
            .then(() => {
              isRefreshing = false;
            });
        });
      }

      return Promise.reject(error);
    },
  );
};

export class Api {
  static instance: Api;

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
      baseURL: API_BASE,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setTokenInterceptors(this.axiosInstance);
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static get<T = any>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise<T> {
    return Api.getAxios().get(url, { params, ...config });
  }

  static delete<T = any>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise<T> {
    return Api.getAxios().delete(url, { params, ...config });
  }

  static post<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return Api.getAxios().post(url, data, config);
  }

  static put<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return Api.getAxios().put(url, data, config);
  }

  static patch<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return Api.getAxios().patch(url, data, config);
  }
}

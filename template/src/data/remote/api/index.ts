import { AxiosPromise } from 'axios';

import { axiosPrivate, axiosPublic, axiosUtility } from './apiConfig';

export class API {
  static get = <T = any>(url: string, params?: Record<string, any>): AxiosPromise<T> =>
    axiosPrivate.get(url, { params });

  static getPublic = <T = any>(url: string, params?: Record<string, any>): AxiosPromise<T> =>
    axiosPublic.get(url, { params });

  static post = <T = any>(url: string, data?: Record<string, any>): AxiosPromise<T> =>
    axiosPrivate.post(url, data);

  static postFormData = <T = any>(url: string, data: FormData): AxiosPromise<T> =>
    axiosPrivate.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

  static postPublic = <T = any>(url: string, data?: Record<string, any>): AxiosPromise<T> =>
    axiosPublic.post(url, data);

  static put = <T = any>(url: string, data?: Record<string, any>): AxiosPromise<T> =>
    axiosPrivate.put(url, data);

  static putFormData = <T = any>(url: string, data: FormData): AxiosPromise<T> =>
    axiosPrivate.put(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

  static patch = <T = any>(url: string, data?: Record<string, any>): AxiosPromise<T> =>
    axiosPrivate.patch(url, data);

  static delete = <T = any>(
    url: string,
    params?: Record<string, any>,
    data?: Record<string, any>
  ): AxiosPromise<T> => axiosPrivate.delete(url, { params, data });

  static head = (url: string) => axiosUtility.head(url);
}

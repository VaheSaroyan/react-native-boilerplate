import axios from 'axios'
import { API_URL } from '@/config'

export class Api {
  static instance
  axiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    // Refresh token logic
    // this.axiosInstance.interceptors.response.use(
    //   response => response,
    //   error => {
    //     const originalRequest = error.config;
    //     if (error.response) {
    //       if (error.response.status === 401 || error.response.status === 403) {
    //         const { refresh } = getState().auth;
    //         return axios.post(`${API_URL}token_refresh/`, { refresh }).then(
    //           res => {
    //             Api.setAuthToken(res.data.access);
    //             originalRequest.headers.Authorization = `Token ${res.data.access}`;
    //             return new Promise((resolve, reject) => {
    //               axios
    //                 .request(originalRequest)
    //                 .then((response) => {
    //                   resolve(response);
    //                 })
    //                 .catch((error) => {
    //                   reject(error);
    //                 });
    //             });
    //           },
    //           () => {
    //             dispatch(resetStore());
    //           },
    //         );
    //       }
    //     }
    //     return Promise.reject(error);
    //   },
    // );
  }
  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api()
    }
    return Api.instance
  }
  static getAxios() {
    return Api.getInstance().axiosInstance
  }

  static setAuthToken(token) {
    Api.getAxios().defaults.headers.Authorization = `Token ${token}`
  }

  static setLanguage(language) {
    Api.getAxios().defaults.headers.common.lang = language
  }
  static handleError({ message, data, status }) {
    return Promise.reject({ message, data, status })
  }
  static clearAuthToken() {
    delete Api.getAxios().defaults.headers.Authorization
  }
  static get(url, params = {}, config = {}) {
    return Api.getAxios().get(url, { params, ...config })
  }

  static post(url, data, config) {
    return Api.getAxios().post(url, data, config)
  }

  static put(url, data, config) {
    return Api.getAxios().put(url, data, config)
  }

  static patch(url, data, config) {
    return Api.getAxios().patch(url, data, config)
  }

  static delete(url, config) {
    return Api.getAxios().delete(url, config)
  }
}

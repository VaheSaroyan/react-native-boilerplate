import axios from 'axios'
import { Config } from '@/Config'

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})
/**
 * handle Error
 * @param message
 * @param data
 * @param status
 * @returns {Promise<unknown>}
 */
export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}
/**
 * set request language
 * @param language
 */
export const setLanguage = (language) => {
  instance.defaults.headers.common.lang = language
}

/**
 * set token
 * @param token
 */
export function setBearerToken(token) {
  instance.defaults.headers.common.Authorization = 'Bearer ' + token
}

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)
/**
 * get request with cancel token
 * @param url
 * @param config
 * @returns {Promise<ValidationOptions.unknown|{response: AxiosResponse<any>, source: CancelTokenSource}>}
 */
export const Get = async (url, config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  try {
    return {
      response: await instance.get(url, {
        ...config,
        cancelToken: source.token,
      }),
      source,
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      const { message, data, status } = error
      console.error(error)
      return handleError({ message, data, status })
    }
  }
}
/**
 * post request with cancel token
 * @param url
 * @param data
 * @param config
 * @returns {Promise<ValidationOptions.unknown|{response: AxiosResponse<any>, source: CancelTokenSource}>}
 */
export const Post = async (url, data, config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  try {
    return {
      response: await instance.post(url, data, {
        ...config,
        cancelToken: source.token,
      }),
      source,
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      const { message, data, status } = error
      console.error(error)
      return handleError({ message, data, status })
    }
  }
}
/**
 * put request with cancel token
 * @param url
 * @param data
 * @param config
 * @returns {Promise<ValidationOptions.unknown|{response: AxiosResponse<any>, source: CancelTokenSource}>}
 */
export const Put = async (url, data, config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  try {
    return {
      response: await instance.put(url, data, {
        ...config,
        cancelToken: source.token,
      }),
      source,
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      const { message, data, status } = error
      console.error(error)
      return handleError({ message, data, status })
    }
  }
}
/**
 * patch request with cancel token
 * @param url
 * @param data
 * @param config
 * @returns {Promise<ValidationOptions.unknown|{response: AxiosResponse<any>, source: CancelTokenSource}>}
 */
export const Patch = async (url, data, config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  try {
    return {
      response: await instance.patch(url, data, {
        ...config,
        cancelToken: source.token,
      }),
      source,
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      const { message, data, status } = error
      console.error(error)
      return handleError({ message, data, status })
    }
  }
}
/**
 * Delete request with cancel token
 * @param url
 * @param data
 * @param config
 * @returns {Promise<ValidationOptions.unknown|{response: AxiosResponse<any>, source: CancelTokenSource}>}
 * @constructor
 */
export const Delete = async (url, data, config) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  try {
    return {
      response: await instance.delete(url, {
        ...config,
        cancelToken: source.token,
      }),
      source,
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      const { message, data, status } = error
      console.error(error)
      return handleError({ message, data, status })
    }
  }
}

export function handleExpiredToken(cb) {
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error && error.response && error.response.status === 401) {
        if (typeof cb === 'function') {
          cb()
        }
      }
      return Promise.reject(error)
    },
  )
}

export default instance

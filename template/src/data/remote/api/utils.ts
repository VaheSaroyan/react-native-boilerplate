import { AxiosError } from 'axios';
import ExpiryMap from 'expiry-map';
// @ts-ignore
import pMemoize from 'p-memoize/dist/index';

import { AuthStorage } from '../../local/domains/Auth';
import { AuthApi } from '../domains/Auth';
import { AppHttpError } from '../models/common';

type ApiErrorResponse = {
  statusCode: number;
  message: string[] | string;
  error: string;
};

/**
 * Base token refresher.
 *
 * @returns refreshed tokens or null in case of any error
 */
export const refreshToken = async () => {
  try {
    const refresh = await AuthStorage.getRefreshToken();
    if (!refresh) {
      return null;
    }

    const tokens = await AuthApi.refreshToken(refresh);
    await AuthStorage.saveTokens(tokens);
    return tokens;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    await AuthStorage.removeTokens();
    return null;
  }
};

const cache = new ExpiryMap(10000);

/**
 * Memoized token refresher. We don't need to spam with refresh token request
 * when we have the case of multiple API calls in a sequence
 *
 * @returns refreshed tokens or null in case of any error
 */
export const memoizedRefreshToken = pMemoize(refreshToken, { cache });

/**
 * Base error handler.
 *
 * @param error Axios error of @type AxiosError
 * @returns mapped object with status code and error message of @type AppHttpError
 */
export const handleError = (error: AxiosError): AppHttpError => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    const status = error.response.status;

    if (status === 0) {
      return {
        code: status,
        message: 'Could not connect to server',
        meta: 'unknown'
      };
    }

    const message = parseErrorData(error.response.data as ApiErrorResponse);

    if (status >= 500) {
      // Sentry.captureException(error.response);
    }

    return {
      code: status,
      message: status === 502 ? 'Service is under maintenance please try again later' : message,
      meta: status >= 400 && status < 500 ? 'client' : 'server'
    };
  } else if (error.request) {
    // Sentry.captureException(error.request);
    return {
      code: -1,
      message: error.message,
      meta: 'unknown'
    };
  } else {
    return {
      code: -1,
      message: error.message,
      meta: 'unknown'
    };
  }
};

const parseErrorData = (data: ApiErrorResponse): string => {
  if (typeof data.message === 'string') {
    return data.message;
  } else if (Array.isArray(data.message)) {
    let errorMessages = '';

    const errors = data.message;

    if (errors.length === 1) {
      errorMessages = errors[0];
    } else {
      errors.forEach(v => {
        errorMessages = errorMessages.concat(v).concat('\n');
      });
    }

    return errorMessages;
  }

  return 'Unknown error';
};

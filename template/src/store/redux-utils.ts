import { RequestSliceState } from './types';

import { AppHttpError, Pagination } from '~/data';

const LOOADING: RequestSliceState = {
  state: 'loading',
  error: undefined
};

const SUCCESS: RequestSliceState = {
  state: 'success',
  error: undefined
};

const ERROR: RequestSliceState = {
  state: 'failure'
};

const IDLE: RequestSliceState = {
  state: 'idle'
};

export const loading = <T>(currentRqst: RequestSliceState<T>): RequestSliceState<T> => ({
  ...LOOADING,
  data: currentRqst.data
});

export const success = <T>(payload?: T): RequestSliceState<T> => ({
  ...SUCCESS,
  data: payload
});

export const failure = <T>(
  currentRqst: RequestSliceState<T>,
  error: AppHttpError | undefined
): RequestSliceState<T> => ({
  ...ERROR,
  data: currentRqst.data,
  error
});

export const idle = <T>(): RequestSliceState<T> => ({
  ...IDLE
});

export const DEFAULT_PAGINATION_LIMIT = 15;

export const DEFAULT_INIT_PAGINATION: Pagination = { limit: DEFAULT_PAGINATION_LIMIT, offset: 0 };

export const handleNextPage = (refresh: boolean, prevPagination: Pagination): Pagination => {
  const nextPage: Pagination = {
    ...prevPagination,
    offset: prevPagination.offset + prevPagination.limit
  };
  return refresh ? { limit: prevPagination.limit, offset: 0 } : nextPage;
};

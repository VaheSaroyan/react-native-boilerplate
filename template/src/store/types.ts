import { rootReducer } from './rootReducer';

import { store } from './index';

import { AppHttpError } from '~/data';

export type RequestState = 'idle' | 'loading' | 'success' | 'failure';

export type RequestSliceState<T = undefined> = {
  error?: AppHttpError;
  data?: T;
  state: RequestState;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

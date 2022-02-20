import { createReducer } from 'deox';
import produce from 'immer';

import { setAuth, setUser } from './actions';

export const initialState = {
  profileStatus: 'IDLE',
  profile: null,
  auth: null,
};

export const userReducer = createReducer(initialState, handle => [
  handle(setUser, (state, { payload }) =>
    produce(state, draft => {
      draft.profile = payload;
    }),
  ),
  handle(setAuth, (state, { payload }) =>
    produce(state, draft => {
      draft.auth = payload;
    }),
  ),
]);

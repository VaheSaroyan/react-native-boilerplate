import { combineReducers } from 'redux';

import { appReducer as mainReducer, resetStore } from '~/modules/app/slice';
import { authReducer } from '~/modules/auth';

const appReducer = combineReducers({
  app: mainReducer,
  auth: authReducer
});

export const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

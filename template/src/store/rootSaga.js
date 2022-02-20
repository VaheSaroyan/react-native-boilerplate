import { all } from 'redux-saga/effects';

import { watchUser } from '~/modules/user/sagas';

export function* rootSaga() {
  yield* all([watchUser()]);
}

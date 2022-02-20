import { getType } from 'deox';
import { put, takeLatest } from 'redux-saga/effects';

import { resetStore } from '~/modules/app/actions';

import { signOut } from './actions';

function* signOutSaga() {
  yield put(resetStore());
}

export function* watchUser() {
  yield takeLatest(getType(signOut), signOutSaga);
}

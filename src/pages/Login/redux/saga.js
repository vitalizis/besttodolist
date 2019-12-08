import { takeLatest } from 'redux-saga/effects';

import signInSaga from './signInSaga';

function* auth() {
  yield takeLatest('FETCHED_AUTH', signInSaga);
}

export default auth;

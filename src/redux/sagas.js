import { all } from 'redux-saga/effects';

// import auth from './Auth/Login/redux/saga';
import auth from '../pages/Login/redux/saga';

export default function* rootSaga() {
  yield all([auth()]);
}

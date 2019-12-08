import { call, put } from 'redux-saga/effects';
import actions from './actions';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

const authMock = (login, password) =>
  new Promise((resolve, reject) => {
    if (login === 'root' && password === 'root') {
      resolve({ token: 'secret-token' });
    } else {
      reject({ status: 401 });
    }
  });

function* signInSaga({ payload: { login, password } }) {
  console.log(login, password);
  try {
    const { token } = yield call(authMock, login, password);
    yield put({ type: SIGN_IN_SUCCESS, payload: token });
    console.log(token, 'token1');
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }
    yield put({ type: SIGN_IN_FAILURE, payload: message });
    localStorage.removeItem('token');
  }
}

export default signInSaga;

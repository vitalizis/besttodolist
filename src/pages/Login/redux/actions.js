import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

const signInActions = {
  requestSignIn: () => ({
    type: SIGN_IN_REQUEST
  }),
  requestSignInSuccess: data => ({
    type: SIGN_IN_SUCCESS,
    token: data
  }),
  requestSignInError: () => ({
    type: SIGN_IN_FAILURE
  }),

  signIn: (login, password) => ({
    type: 'FETCHED_AUTH',
    payload: { login, password }
  })
};

export default signInActions;

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

const initialState = {
  token: '',
  loading: false,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        token: '',
        loading: true,
        error: false
      };
    case SIGN_IN_SUCCESS:
      return {
        token: action.payload,
        loading: false,
        error: false
      };
    case SIGN_IN_FAILURE:
      return {
        token: '',
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default authReducer;

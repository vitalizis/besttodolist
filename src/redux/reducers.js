import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../pages/Login/redux/reducer';
import tasksReducer from '../pages/Main/redux/tasksReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    auth: authReducer,
    tasks: tasksReducer
  });

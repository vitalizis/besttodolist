import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { saveState } from '../config/localStorage';
import { loadState } from '../config/localStorage';
import reducers from './reducers';
import Sagas from './sagas';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const createEnhancer = () => {
  const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

  const reduxDevtoolsExtensionsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (reduxDevtoolsExtensionsCompose) {
    const devtoolsExtensionCompose = reduxDevtoolsExtensionsCompose({
      actionsBlacklist: []
    });

    return compose(devtoolsExtensionCompose(middleware));
  } else {
    return compose(middleware);
  }
};

const configureStoreDev = initialState => {
  const enhancer = createEnhancer();
  const persistedState = loadState();
  const store = createStore(reducers(history), persistedState, enhancer);
  sagaMiddleware.run(Sagas);
  store.subscribe(() => {
    saveState({
      tasks: store.getState().tasks
    });
  });
  return store;
};

export default configureStoreDev;

import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './config/Routes';

const App = props => {
  const { history } = props;
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Routes />
          </Switch>
        </>
      </ConnectedRouter>
    </div>
  );
};

export default App;

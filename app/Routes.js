import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PlayPage from './containers/PlayPage';
import OptionsPage from './containers/OptionsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.PLAY} component={PlayPage} />
      <Route path={routes.OPTIONS} component={OptionsPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);

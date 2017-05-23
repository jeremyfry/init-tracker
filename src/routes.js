import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/PlayerPage';
import InitiativePage from './components/InitiativePage';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/i" component={InitiativePage}/>
  </Route>
);

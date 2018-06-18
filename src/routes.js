import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import InitiativePage from './components/InitiativePage';
export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={PlayerPage}/> */}
    <IndexRoute component={InitiativePage}/>
  </Route>
);

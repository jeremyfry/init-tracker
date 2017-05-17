import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {PlayersCollection} from './containers/playerCollection';

import App from './components/app';
import HomePage from './components/homePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PlayersCollection}/>
    {/*<Route path="fuel-savings" component={FuelSavingsPage}/>*/}
    {/*<Route path="about" component={AboutPage}/>*/}
    {/*<Route path="*" component={NotFoundPage}/>*/}
  </Route>
);
import { combineReducers } from 'redux';
import players from './playerReducer';
import newPlayer from './newPlayerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  players,
  newPlayer,
  routing: routerReducer
});

export default rootReducer;

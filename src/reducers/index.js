import { combineReducers } from 'redux';
import players from './playerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  players,
  routing: routerReducer
});

export default rootReducer;

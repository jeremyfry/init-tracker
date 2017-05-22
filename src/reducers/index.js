import { combineReducers } from 'redux';
import players from './playerReducer';
import newPlayer from './newPlayerReducer';
import initiativeList from './initiativeListReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	players,
	newPlayer,
	initiativeList,
	routing: routerReducer
});

export default rootReducer;

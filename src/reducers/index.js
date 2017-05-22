import { combineReducers } from 'redux';
import players from './playerReducer';
import newPlayer from './newPlayerReducer';
import initiativeList from './initiativeListReducer';
import uiState from './uiStateReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	players,
	newPlayer,
	initiativeList,
	uiState,
	routing: routerReducer
});

export default rootReducer;

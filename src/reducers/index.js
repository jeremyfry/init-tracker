import { combineReducers } from 'redux';
import players from './playerReducer';
import newPlayer from './newPlayerReducer';
import initiativeList from './initiativeListReducer';
import uiState from './uiStateReducer';
import { routerReducer } from 'react-router-redux';
import currentRound from './roundReducer';

const rootReducer = combineReducers({
	players,
	newPlayer,
	initiativeList,
	uiState,
	routing: routerReducer,
	currentRound
});

export default rootReducer;

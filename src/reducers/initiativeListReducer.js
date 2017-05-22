import { INITIATIVE_ACTIONS } from '../constants';
import objectAssign from 'object-assign';
import initialState from './initialState';
import playerModel from '../store/playerModel';

export default function initiativeListReducer(state = initialState.initiativeList, action){
	let newState, playerIndex, insertIndex;
	switch (action.type){
		case INITIATIVE_ACTIONS.INSERT_BEFORE:
			newState = Object.assign({}, state);
			playerIndex = state.players.indexOf(action.player);
			if(playerIndex !== -1){
				// remove the item from the array
				newState.players = [...state.players.slice(0, playerIndex), ...state.players.slice(playerIndex+1)];
			}

			insertIndex = newState.players.indexOf(action.before);
			newState.players.splice(insertIndex, 0, action.player);
			return newState;

		case INITIATIVE_ACTIONS.INSERT_AT_END:
			newState = Object.assign({}, state);
			playerIndex = state.players.indexOf(action.player);
			if(playerIndex === -1){
				newState.players = [...state.players, action.player];
			}else{
				newState.players = [...state.players.slice(0, playerIndex), ...state.players.slice(playerIndex+1), action.player];
			}
			return newState;
		default:
			return state;
	}
}

import { INITIATIVE_ACTIONS } from '../constants';
import initialState from './initialState';

export default function initiativeListReducer(state = initialState.initiativeList, action){

	let newState, playerIndex, insertIndex;
	switch (action.type){
		case INITIATIVE_ACTIONS.INSERT_BEFORE:
			newState = [...state];
			playerIndex = state.indexOf(action.player);
			if(playerIndex !== -1){
				// remove the item from the array
				newState = [...state.slice(0, playerIndex), ...state.slice(playerIndex+1)];
			}

			insertIndex = newState.indexOf(action.before);
			if(insertIndex === -1){
				return state;
			}
			newState.splice(insertIndex, 0, action.player);
			return newState;

		case INITIATIVE_ACTIONS.INSERT_AT_END:
			playerIndex = state.indexOf(action.player);
			if(playerIndex === -1){
				newState = [...state, action.player];
			}else{
				newState = [...state.slice(0, playerIndex), ...state.slice(playerIndex+1), action.player];
			}
			return newState;
		default:
			return state;
	}
}

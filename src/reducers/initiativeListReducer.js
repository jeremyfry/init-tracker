import { INITIATIVE_ACTIONS } from '../constants';
import initialState from './initialState';

export default function initiativeListReducer(state = initialState.initiativeList, action){
	let newState, index;
	switch (action.type){
		case INITIATIVE_ACTIONS.INSERT_BEFORE:
			newState = [...state.filter( player => player != action.player)];
			index = newState.indexOf(action.before);
			if(index === -1){
				return state;
			}
			newState.splice(index, 0, action.player);
			return newState;
		case INITIATIVE_ACTIONS.INSERT_AT_END:
			return [
				...state.filter( player => player != action.player),
				action.player
			];
		case INITIATIVE_ACTIONS.REMOVE_PLAYER:
			return [
				...state.filter(player => player !== action.player)
			];
		default:
			return state;
	}
}

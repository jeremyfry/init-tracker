import { INITIATIVE_ACTIONS } from '../constants';
import initialState from './initialState';

export default function initiativeListReducer(state = initialState.initiativeList, action){

	switch (action.type){
		case INITIATIVE_ACTIONS.INSERT_BEFORE:
			let newState = [...state.filter( player => player != action.player)];
			const index = newState.indexOf(action.before);
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
		default:
			return state;
	}
}

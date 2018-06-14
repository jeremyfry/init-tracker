import { PLAYER_ACTIONS } from '../constants';
import initialState from './initialState';
import playerModel from '../store/playerModel';

export default function newPlayerReducer(state = initialState.newPlayer, action){
	switch (action.type){
		case PLAYER_ACTIONS.NEW_PLAYER_EDIT:
			return {...playerModel, editing: true};
		case PLAYER_ACTIONS.NEW_PLAYER_CHANGE:
			return {...state, [action.field]: action.value};
		case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
			return initialState.newPlayer;
		case PLAYER_ACTIONS.EDIT_EXISTING_PLAYER:
			return {...playerModel, ...action.value, editing: true};
		default:
			return state;
	}
}

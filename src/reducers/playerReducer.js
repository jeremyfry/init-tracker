import {PLAYER_ACTIONS} from '../constants';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
	const getNextId = (playerArray) =>{
		let highestId = 0;
		playerArray.forEach((player) =>{
			highestId = Math.max(player.id, highestId);
		});
		return highestId+1;
	};

	switch (action.type) {
		case PLAYER_ACTIONS.SET_STATUS:
			return state;
		case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
			const nextId = getNextId(state);
			return [...state, {id: nextId, ...action.value}];
		case PLAYER_ACTIONS.EDIT_EXISTING_PLAYER:
			const index = state.map(p => p.id).indexOf(action.value.id);
			return [...state.slice(0, index), ...state.slice(index+1)];
		default:
			return state;
	}
}

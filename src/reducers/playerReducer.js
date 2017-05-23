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
			return [...state, {...action.value, id: nextId}];
		default:
			return state;
	}
}

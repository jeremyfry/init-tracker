import {PLAYER_ACTIONS} from '../constants';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
	const getHighestId = (playerArray) =>{
		let highestId = 0;
		playerArray.forEach((player) =>{
			highestId = Math.max(player.id, highestId);
		});
		return highestId;
	};

	let highestId, newPlayer;
	switch (action.type) {
		case PLAYER_ACTIONS.SET_STATUS:
			return state;
		case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
			highestId = getHighestId(state);
			newPlayer = Object.assign({}, action.value, {id: highestId+1});
			return [...state, newPlayer];
		default:
			return state;
	}
}

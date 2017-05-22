import {PLAYER_ACTIONS} from '../constants';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
	let highestId = 0, newPlayer;
	switch (action.type) {
		case PLAYER_ACTIONS.SET_STATUS:
			return state;
		case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
			state.forEach(function(player){
				highestId = Math.max(player.id, highestId);
			});
			newPlayer = Object.assign({}, action.value);
			newPlayer.id = highestId + 1;
			return [...state, newPlayer];
		default:
			return state;
	}
}

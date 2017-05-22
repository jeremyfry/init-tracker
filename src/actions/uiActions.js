import {UI_ACTIONS} from '../constants';
export function updatePlayerDrag(value){
	return {
		type: UI_ACTIONS.PLAYER_DRAG_UPDATE,
		value
	};
}

import {UI_ACTIONS} from '../constants';
export function updateUiPlayerDrag(value){
	return {
		type: UI_ACTIONS.PLAYER_DRAG_UPDATE,
		value
	};
}

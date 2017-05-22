import {UI_ACTIONS} from '../constants';
import initialState from './initialState';

export default function uiStateReducer(state = initialState.uiState, action) {
	switch (action.type) {
		case UI_ACTIONS.PLAYER_DRAG_UPDATE:
			return Object.assign({}, state, {playerCardDragging: action.value});
		default:
			return state;
	}
}

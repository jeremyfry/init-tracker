import { UI_ACTIONS } from '../constants';
import reducer from './uiStateReducer';
import initialState from './initialState';

describe('Reducers - UI State', () =>{
	it('should set initial state by default', () =>{
		const action = {type: 'unknown'};
		const expected = initialState.uiState;

		expect(reducer(undefined, action)).toEqual(expected);
	});

	it('should handle PLAYER_DRAG_UPDATE', () =>{
		const action = {
			type: UI_ACTIONS.PLAYER_DRAG_UPDATE,
			value: true
		};
		const expected = {playerCardDragging: true};
		const initial = initialState.uiState;

		expect(reducer(initial, action)).toEqual(expected);
	});
});

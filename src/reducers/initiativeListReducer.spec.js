import { INITIATIVE_ACTIONS } from '../constants';
import reducer from './initiativeListReducer';
import initialState from './initialState';

describe('Reducers - Initiative List', () => {
	it('should set initial state by default', () => {
		const action = { type: 'unknown' };
		const expected = initialState.initiativeList;

		expect(reducer(undefined, action)).toEqual(expected);
	});

	it('should handle INSERT_BEFORE', () => {
		const action = {
			type: INITIATIVE_ACTIONS.INSERT_BEFORE,
			player: 3,
			before: 1
		};
		const expected = [0, 3, 1, 2];
		const initialState = [0, 1, 2, 3];

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('should handle INSERT_BEFORE with an invalid before', () => {
		const action = {
			type: INITIATIVE_ACTIONS.INSERT_BEFORE,
			player: 3,
			before: 5
		};
		const expected = [0, 1, 2, 3];
		const initialState = [0, 1, 2, 3];

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('should handle INSER_AT_END', () => {
		const action = {
			type: INITIATIVE_ACTIONS.INSERT_AT_END,
			player: 3
		};
		const expected = [0, 1, 2, 3];
		const initialState = [0, 1, 2];

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('should handle INSER_AT_END when the player is already in the list', () => {
		const action = {
			type: INITIATIVE_ACTIONS.INSERT_AT_END,
			player: 1
		};
		const expected = [0, 2, 3, 1];
		const initialState = [0, 1, 2, 3];

		expect(reducer(initialState, action)).toEqual(expected);
	});
});

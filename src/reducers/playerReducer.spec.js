import { PLAYER_ACTIONS } from '../constants';
import reducer from './playerReducer';
import playerModel from '../store/playerModel';

describe('Reducers - Player', () => {

  it('should handle NEW_PLAYER_SAVE', () => {
    const initialState = [];
    const action = { type: PLAYER_ACTIONS.NEW_PLAYER_SAVE};
    const newPlayer = Object.assign({}, playerModel, {name: 'New Player'});
    const expected = [ Object.assign({}, newPlayer, {id: 1}) ];

    expect(reducer(initialState, Object.assign({}, action, {value: newPlayer})))
      .toEqual(expected);
  });

	it('should increment ids on NEW_PLAYER_SAVE', () => {
		const initialState = [Object.assign({}, playerModel, {id: 1, name: 'New Player'})];
		const action = { type: PLAYER_ACTIONS.NEW_PLAYER_SAVE};
		const newPlayer = Object.assign({}, playerModel, {name: 'New Player'});
		const expected = [ ...initialState, Object.assign({}, newPlayer, {id: 2}) ];

		expect(reducer(initialState, Object.assign({}, action, {value: newPlayer})))
			.toEqual(expected);
	});


});

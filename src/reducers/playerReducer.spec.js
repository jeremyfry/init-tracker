import { PLAYER_ACTIONS } from '../constants';
import reducer from './playerReducer';
import playerModel from '../store/playerModel';

describe('Reducers - Player', () => {

  it('should handle NEW_PLAYER_SAVE', () => {
    const initialState = [];
    const action = { type: PLAYER_ACTIONS.NEW_PLAYER_SAVE};
    const newPlayer = Object.assign({}, playerModel, {name: 'New Player'});
    const expected = [ newPlayer ];

    expect(reducer(initialState, Object.assign({}, action, {value: newPlayer})))
      .toEqual(expected);
  });


});

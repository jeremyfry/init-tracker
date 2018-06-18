import { PLAYER_ACTIONS } from '../constants';
import reducer from './newPlayerReducer';
import playerModel from '../store/playerModel';
import initialState from './initialState';

describe('Reducers - New Player', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = { ...initialState.newPlayer };
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle NEW_PLAYER_EDIT', () => {
    const action = { type: PLAYER_ACTIONS.NEW_PLAYER_EDIT};
    const expected = Object.assign({}, { ...initialState.newPlayer, editing: true });

    expect(reducer({}, action)).toEqual(expected);
  });

  it('should handle NEW_PLAYER_CHANGE', () => {
    const action = { type: PLAYER_ACTIONS.NEW_PLAYER_CHANGE};
    const expected = Object.assign({}, {name: 'Name'});

    expect(reducer({name: ''}, Object.assign({}, action, {field: 'name', value: 'Name'})))
      .toEqual(expected);
  });

  it('should handle NEW_PLAYER_SAVE', () => {
    const action = { type: PLAYER_ACTIONS.NEW_PLAYER_SAVE};
    const expected = Object.assign({}, initialState.newPlayer);
    expect(reducer({}, action)).toEqual(expected);
  });

});

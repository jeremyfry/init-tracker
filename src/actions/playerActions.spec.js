import { PLAYER_ACTIONS } from '../constants';
import * as actions from './playerActions';

describe('Actions', () => {
  it('should create an action to update a new player', ()=>{
    const state = {};
    const value = 'value';
    const field = 'field';
    const expected = {
      type: PLAYER_ACTIONS.NEW_PLAYER_CHANGE,
      field: field,
      value: value
    };

    expect(typeof (actions.newPlayerChange(state))).toEqual('object');
    const actual = actions.newPlayerChange(field, value);
    expect(actual).toEqual(expected);
  });

  it('should create an action to allow editing a new player', ()=>{
    const state = {};
    const expected = {
      type: PLAYER_ACTIONS.NEW_PLAYER_EDIT
    };

    expect(typeof (actions.editNewPlayer(state))).toEqual('object');
    const actual = actions.editNewPlayer(state);
    expect(actual).toEqual(expected);
  });

  // it('should throw an error when two plays have the same name', ()=>{
  //
  // });
});

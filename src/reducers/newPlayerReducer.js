import { PLAYER_ACTIONS } from '../constants';
import objectAssign from 'object-assign';
import initialState from './initialState';
import playerModel from '../store/playerModel';

export default function newPlayerReducer(state = initialState.newPlayer, action){
  let newState;
  switch (action.type){
    case PLAYER_ACTIONS.NEW_PLAYER_EDIT:
      return objectAssign({}, {editing: true}, playerModel);
    case PLAYER_ACTIONS.NEW_PLAYER_CHANGE:
      newState = objectAssign({}, state);
      newState[action.field] = action.value;
      return newState;
    case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
      return objectAssign({}, initialState.newPlayer);
    default:
      return state;
  }
}

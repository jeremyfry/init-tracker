import {PLAYER_ACTIONS} from '../actions/playerActions';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case PLAYER_ACTIONS.SET_STATUS:
      return objectAssign({}, state, {status: action.status});
    default:
      return state;
  }
}

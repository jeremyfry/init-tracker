import {PLAYER_ACTIONS} from '../constants';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case PLAYER_ACTIONS.SET_STATUS:
      return state;
    case PLAYER_ACTIONS.NEW_PLAYER_SAVE:
      return  [...state, action.value];
    default:
      return state;
  }
}

import {PLAYER_ACTIONS} from '../constants';
export function setPlayerStatus(player, value) {
  return {
    type: PLAYER_ACTIONS.SET_STATUS,
    player,
    value
  };
}

export function editNewPlayer() {
  return {
    type: PLAYER_ACTIONS.NEW_PLAYER_EDIT
  };
}

export function editExistingPlayer(value){
  return {
    type: PLAYER_ACTIONS.EDIT_EXISTING_PLAYER,
    value
  }
}

export function newPlayerChange(field, value) {
  return {
    type: PLAYER_ACTIONS.NEW_PLAYER_CHANGE,
    field,
    value
  };
}

export function saveNewPlayer() {
  return (dispatch, getState) =>{
    const newPlayer = getState().newPlayer;
    dispatch({
      type: PLAYER_ACTIONS.NEW_PLAYER_SAVE,
      value: newPlayer
    });
  };
}

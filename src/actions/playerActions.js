export const PLAYER_ACTIONS = {
  SET_STATUS: 'PLAYER__SET_STATUS'
};

export function setPlayerStatus(player, value) {
  return {
    type: PLAYER_ACTIONS.SET_STATUS,
    player,
    value
  };
}

export const ROUND_ACTIONS = {
    START_ROUND: 'START_ROUND',
    SET_POSITION: 'SET_POSITION'
};
export const startRound = () => dispatch => {
    dispatch({
        type: ROUND_ACTIONS.START_ROUND
    })
    return Promise.resolve();
};

export const setPosition = (value) => (dispatch, getState) => {
    const id = getState().initiativeList[value];
    dispatch({
      type: ROUND_ACTIONS.SET_POSITION,
      value,
      id
    });
    return Promise.resolve(getState());
  }; 
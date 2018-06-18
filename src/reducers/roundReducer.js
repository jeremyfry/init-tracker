import initialState from "./initialState";
import { ROUND_ACTIONS } from "../actions/roundActions";

export default function roundReducer(state = initialState.currentRound, action) {
    switch (action.type) {
        case ROUND_ACTIONS.START_ROUND:
            return {...state, started: true, currentPosition: 0};
        case ROUND_ACTIONS.SET_POSITION:
            return {...state, currentPosition: action.value, currentId: action.id};
        default:
            return state;
    }
}
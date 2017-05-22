import { INITIATIVE_ACTIONS } from '../constants';
import objectAssign from 'object-assign';
import initialState from './initialState';
import playerModel from '../store/playerModel';

export default function initiativeListReducer(state = initialState.initiativeList, action){
	let newState;
	switch (action.type){
		case INITIATIVE_ACTIONS.INSERT_BEFORE:
			return [];
		case INITIATIVE_ACTIONS.INSERT_AT_END:
			return [];
		default:
			return state;
	}
}

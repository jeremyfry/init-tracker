import { INITIATIVE_ACTIONS } from '../constants';
export const insertPlayerBefore = (player, before) =>({
	type: INITIATIVE_ACTIONS.INSERT_BEFORE,
	player,
	before
});

export const insertPlayerAtEnd = (player) =>({
	type: INITIATIVE_ACTIONS.INSERT_AT_END,
	player
});

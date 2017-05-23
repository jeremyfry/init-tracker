import { INITIATIVE_ACTIONS } from '../constants';
import * as actions from './initiativeActions';

describe('Actions', () => {
	it('should create an action to insert a player', ()=>{
		const state = {};
		const drop = 0;
		const player = 1;
		const expected = {
			type: INITIATIVE_ACTIONS.INSERT_BEFORE,
			player: 1,
			before: 0
		};

		expect(typeof (actions.insertPlayerBefore(player, drop))).toEqual('object');
		const actual = actions.insertPlayerBefore(player, drop);
		expect(actual).toEqual(expected);
	});

	it('should create an action to insert a player at the end', ()=>{
		const state = {};
		const player = 1;
		const expected = {
			type: INITIATIVE_ACTIONS.INSERT_AT_END,
			player: 1
		};

		expect(typeof (actions.insertPlayerAtEnd(player))).toEqual('object');
		const actual = actions.insertPlayerAtEnd(player);
		expect(actual).toEqual(expected);
	});


});

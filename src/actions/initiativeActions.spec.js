import { INITIATIVE_ACTIONS } from '../constants';
import * as actions from './initiativeActions';

describe('Actions', () => {
	it('should create an action to insert a player', ()=>{
		const state = {};
		const drop = {
			action: INITIATIVE_ACTIONS.INSERT_BEFORE,
			id: 0
		};
		const player = 1;
		const expected = {
			type: INITIATIVE_ACTIONS.INSERT_BEFORE,
			player: 1,
			before: 0
		};

		expect(typeof (actions.insertPlayer(player, drop))).toEqual('object');
		const actual = actions.insertPlayer(player, drop);
		expect(actual).toEqual(expected);
	});

	it('should create an action to insert a player and take a type', ()=>{
		const state = {};
		const drop = {
			action: INITIATIVE_ACTIONS.INSERT_AT_END,
			id: 0
		};
		const player = 1;
		const expected = {
			type: INITIATIVE_ACTIONS.INSERT_AT_END,
			player: 1,
			before: 0
		};

		expect(typeof (actions.insertPlayer(player, drop))).toEqual('object');
		const actual = actions.insertPlayer(player, drop);
		expect(actual).toEqual(expected);
	});


});

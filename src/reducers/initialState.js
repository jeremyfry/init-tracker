import { PLAYER_STATUS } from '../constants';

export default {
	players: [
		{
			id: 0,
			name: 'Aurthur',
			playerClass: 'Wizard',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 0,
			stats: {
				ssdc: 17,
				ac: 15,
				pp: 12,
				str: 10,
				int: 12,
				dex: 12,
				con: 8,
				wis: 18,
				cha: 22,
				init: 3,
				spd: 30
			}
		},
		{
			id: 1,
			name: 'Dave',
			playerClass: 'Cleric',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 1,
			stats: {
				ssdc: 17,
				ac: 15,
				pp: 12,
				str: 10,
				int: 12,
				dex: 12,
				con: 8,
				wis: 18,
				cha: 22,
				init: 3,
				spd: 3
			}
		},
		{
			id: 2,
			name: 'John',
			playerClass: 'Thief',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 2,
			stats: {
				ssdc: 17,
				ac: 15,
				pp: 12,
				str: 10,
				int: 12,
				dex: 12,
				con: 8,
				wis: 18,
				cha: 22,
				init: 3,
				spd: 3
			}
		},
		{
			id: 3,
			name: 'Mary',
			playerClass: 'Figther',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 3,
			stats: {
				ssdc: 17,
				ac: 15,
				pp: 12,
				str: 10,
				int: 12,
				dex: 12,
				con: 8,
				wis: 18,
				cha: 22,
				init: 3,
				spd: 3
			}
		}
	],
	newPlayer: {
		editing: false,
		name: '',
		playerClass: '',
		status: PLAYER_STATUS.NORMAL,
		ledPosition: 0,
		stats: {
			ssdc: 0,
			ac: 0,
			pp: 0,
			str: 0,
			int: 0,
			dex: 0,
			con: 0,
			wis: 0,
			cha: 0,
			init: 0,
			spd: 0
		}
	},
	initiativeList: [1,3,],
	currentRound: {
		started: false,
		currentPosition: 0,
		currentId: 0
	},
	uiState: {
		playerCardDragging: -1
	}
};

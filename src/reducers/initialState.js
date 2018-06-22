import { PLAYER_STATUS } from '../constants';

export default {
	players: [
		{
			id: 0,
			name: 'Baxus',
			playerClass: 'Paladin',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 0,
			stats: {
				ssdc: 12,
				ac: 16,
				pp: 10,
				str: 17,
				dex: 10,
				con: 14,
				int: 9,
				wis: 10,
				cha: 15,
				init: 0,
				spd: 30
			}
		},
		{
			id: 1,
			name: 'Topai',
			playerClass: 'Monk',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 1,
			stats: {
				ssdc: 13,
				ac: 16,
				pp: 15,
				str: 10,
				dex: 17,
				con: 14,
				int: 8,
				wis: 16,
				cha: 8,
				init: 3,
				spd: 30
			}
		},
		{
			id: 2,
			name: 'Zephyr',
			playerClass: 'Sorceress',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 2,
			stats: {
				ssdc: 13,
				ac: 12,
				pp: 12,
				str: 10,
				dex: 15,
				con: 15,
				int: 9,
				wis: 9,
				cha: 18,
				init: 2,
				spd: 30
			}
		},
		{
			id: 3,
			name: 'Skithirys',
			playerClass: 'Sorceress',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 3,
			stats: {
				ssdc: 13,
				ac: 12,
				pp: 12,
				str: 10,
				dex: 15,
				con: 15,
				int: 9,
				wis: 9,
				cha: 17,
				init: 2,
				spd: 30
			}
		},
		{
			id: 4,
			name: 'Cooper',
			playerClass: 'Wizard',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 4,
			stats: {
				ssdc: 13,
				ac: 15,
				pp: 12,
				str: 8,
				dex: 16,
				con: 10,
				int: 16,
				wis: 14,
				cha: 10,
				init: 8,
				spd: 25
			}
		},
		{
			id: 5,
			name: 'Morven',
			playerClass: 'Ranger',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 5,
			stats: {
				ssdc: 13,
				ac: 12,
				pp: 15,
				str: 16,
				dex: 10,
				con: 14,
				int: 10,
				wis: 16,
				cha: 8,
				init: 0,
				spd: 30
			}
		},
		{
			id: 6,
			name: 'Enemy 1',
			playerClass: 'Warlock',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 6,
			stats: {
				ssdc: 0,
				ac: 0,
				pp: 0,
				str: 0,
				dex: 0,
				con: 0,
				int: 0,
				wis: 0,
				cha: 0,
				init: 0,
				spd: 30
			}
		},
		{
			id: 7,
			name: 'Enemy 2',
			playerClass: 'Warlock',
			status: PLAYER_STATUS.NORMAL,
			editing: false,
			ledPosition: 7,
			stats: {
				ssdc: 0,
				ac: 0,
				pp: 0,
				str: 0,
				dex: 0,
				con: 0,
				int: 0,
				wis: 0,
				cha: 0,
				init: 0,
				spd: 30
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

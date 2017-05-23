import { PLAYER_STATUS } from '../constants';

export default {
	players: [
		{
			id: 0,
			name: 'Aurthur',
			playerClass: 'Wizard',
			status: PLAYER_STATUS.NORMAL
		},
		{
			id: 1,
			name: 'Dave',
			playerClass: 'Cleric',
			status: PLAYER_STATUS.NORMAL
		},
		{
			id: 2,
			name: 'John',
			playerClass: 'Thief',
			status: PLAYER_STATUS.NORMAL
		},
		{
			id: 3,
			name: 'Mary',
			playerClass: 'Warrior',
			status: PLAYER_STATUS.NORMAL
		}
	],
	newPlayer: {
		editing: false
	},
	initiativeList: [],
	uiState: {
		playerCardDragging: -1
	}
};

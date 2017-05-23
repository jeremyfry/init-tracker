import { STATUS__NORMAL } from '../constants';

export default {
	players: [
		{
			id: 0,
			name: 'Aurthur',
			playerClass: 'Wizard',
			status: STATUS__NORMAL
		},
		{
			id: 1,
			name: 'Dave',
			playerClass: 'Cleric',
			status: STATUS__NORMAL
		},
		{
			id: 2,
			name: 'John',
			playerClass: 'Thief',
			status: STATUS__NORMAL
		},
		{
			id: 3,
			name: 'Mary',
			playerClass: 'Warrior',
			status: STATUS__NORMAL
		}
	],
	newPlayer: {
		editing: false
	},
	initiativeList: {
		players: []
	},
	uiState: {
		playerCardDragging: false
	}
};

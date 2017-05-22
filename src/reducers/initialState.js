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
		}
	],
	newPlayer: {
		editing: false
	},
	initiativeList: []
};

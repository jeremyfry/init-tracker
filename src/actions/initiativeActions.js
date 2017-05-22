export const insertPlayer = (player, drop) =>({
	type: drop.action,
	player,
	before: drop.id
});

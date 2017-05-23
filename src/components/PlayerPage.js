import React from 'react';
import PlayersCollection from '../containers/playerCollection';

const PlayerPage = () => {
	return (
		<div>
			<PlayersCollection showAddPlayers={true} cssClasses={[]} addPlayer={true}/>
		</div>
	);
};

export default PlayerPage;

import React from 'react';
import PlayersCollection from '../containers/playerCollection';

const HomePage = () => {
	return (
		<div>
			<PlayersCollection showAddPlayers={true}/>
		</div>
	);
};

export default HomePage;

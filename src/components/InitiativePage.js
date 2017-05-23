import React from 'react';
import PlayersCollection from '../containers/playerCollection';
import InitiativeList from '../containers/InitiativeList';
const InitiativePage = () => {
	return (
		<div>
			<InitiativeList/>
			<PlayersCollection showAddPlayers={true} cssClasses={["player-collection--fixed"]}
							   draggableItems={true} addPlayer={false} filterUsedPlayers={true}/>
		</div>
	);
};

export default InitiativePage;

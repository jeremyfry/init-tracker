import React from 'react';
import PlayersCollection from '../containers/playerCollection';
import InitiativeList from '../containers/InitiativeList';
import RoundControls from './RoundControls';
const InitiativePage = () => {
	return (
		<div>
			<div className="battle-container">
				<InitiativeList/>
				<PlayersCollection cssClasses={["reserve-list"]} reserveDropTarget={true}
					draggableItems={true} addPlayer={false} filterUsedPlayers={true}/>
				<RoundControls/>
			</div>
			<PlayersCollection cssClasses={["player-collection--view"]}
				draggableItems={false} addPlayer={true} />
		</div>
	);
};

export default InitiativePage;

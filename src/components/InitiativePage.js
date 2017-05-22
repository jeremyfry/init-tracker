import React from 'react';
import SmallPlayerList from '../containers/SmallPlayerList';
import InitiativeList from '../containers/InitiativeList';
const InitiativePage = () => {
	return (
		<div>
			<InitiativeList/>
			<SmallPlayerList allowDragDrop={true}/>
		</div>
	);
};

export default InitiativePage;

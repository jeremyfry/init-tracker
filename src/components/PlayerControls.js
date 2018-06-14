import React from 'react';
import PropTypes from 'prop-types';

const PlayerControls = () =>{
	return (
		<div className="player-card__controls">Controls</div>
	);
};

PlayerControls.propTypes = {
	player: PropTypes.object.isRequired
};

export default PlayerControls;

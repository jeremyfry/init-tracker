import React from 'react';
import PropTypes from 'prop-types';

const setColor = (color, led) => () => fetch(`/led/${led}/${color}`);

const PlayerControls = (props) =>{
	return (
		<div className="player-card__controls">
            <button onClick={setColor('255/0/0', props.player.ledPosition)} className="player-card__red"></button>
            <button onClick={setColor('0/0/255', props.player.ledPosition)} className="player-card__blue"></button>
            <button onClick={setColor('0/255/0', props.player.ledPosition)} className="player-card__green"></button>
        </div>
	);
};

PlayerControls.propTypes = {
	player: PropTypes.object.isRequired
};

export default PlayerControls;

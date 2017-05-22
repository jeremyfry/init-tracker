import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PLAYER_ACTIONS } from '../constants';
import PlayerCard from '../components/PlayerCard';
import AddPlayerCard from '../components/AddPlayerCard';

const PlayersCollectionComponent = (props) =>{
	const playerCardClasses = props.draggableItems ? ['player-card--small'] : [];
	return (
		<div className={['player-collection', ...props.cssClasses].join(' ')}>
			{props.players.map(player =>
				<PlayerCard key={player.id} player={player} draggable={props.draggableItems} cssClasses={playerCardClasses}/>
			)}
			{props.addPlayer &&	<AddPlayerCard/>}
		</div>
	);
};

PlayersCollectionComponent.propTypes = {
	players: PropTypes.array,
	draggableItems: PropTypes.bool,
	cssClasses: PropTypes.array.isRequired,
	addPlayer: PropTypes.bool.isRequired
};

export default connect(
	(state) => ({ players: state.players}),
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(PlayersCollectionComponent);

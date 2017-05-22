import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PLAYER_ACTIONS } from '../constants';
import PlayerCard from '../components/PlayerCard';
import AddPlayerCard from '../components/AddPlayerCard';

const PlayersCollectionComponent = (props) =>{
	return (
		<div className="player-collection">
			{props.players.map(player =>
				<PlayerCard key={player.id} player={player}/>
			)}
			<AddPlayerCard/>
		</div>
	);
};

PlayersCollectionComponent.propTypes = {
	players: PropTypes.array
};

export default connect(
	(state) => ({ players: state.players}),
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(PlayersCollectionComponent);

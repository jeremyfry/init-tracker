import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PLAYER_ACTIONS } from '../constants';
import PlayerCard from '../components/PlayerCard';

const SmallPlayerList = (props) =>{
	return (
		<div className="player-collection player-collection--small">
			{props.players.map(player =>
				<PlayerCard key={player.name} player={player} draggable={true}/>
			)}
		</div>
	);
};

SmallPlayerList.propTypes = {
	players: PropTypes.array
};

export default connect(
	(state) => ({ players: state.players}),
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(SmallPlayerList);

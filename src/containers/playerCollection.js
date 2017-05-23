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
			{props.players.map((player, index) =>
				<PlayerCard key={player.id} index={index} player={player} draggable={props.draggableItems} cssClasses={playerCardClasses}/>
			)}
			{props.addPlayer &&	<AddPlayerCard/>}
		</div>
	);
};

PlayersCollectionComponent.propTypes = {
	players: PropTypes.array,
	draggableItems: PropTypes.bool,
	cssClasses: PropTypes.array.isRequired,
	addPlayer: PropTypes.bool.isRequired,
	filterUsedPlayers: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
	if(ownProps.filterUsedPlayers){
		return { players: state.players.filter((player)=>{
			return state.initiativeList.indexOf(player.id) === -1;
		})};
	}else{
		return { players: state.players};
	}
};

export default connect(
	mapStateToProps,
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(PlayersCollectionComponent);

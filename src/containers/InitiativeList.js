import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PLAYER_ACTIONS, INITIATIVE_ACTIONS } from '../constants';
import PlayerCard from '../components/PlayerCard';
import InitiativeDropTarget from '../components/InitiativeDropTarget';

class InitiativeList extends Component{
	render(){
		const {players} = this.props;
		return (
			<div className="initiative-list">
				<span className="list-header">Battle</span>
				{players.map((player, index) =>
					<PlayerCard key={player.name} index={index} player={player} draggable={true} isDropTarget={true} cssClasses={['player-card--small']} showControls={true}/>
				)}
				<InitiativeDropTarget dropAction={INITIATIVE_ACTIONS.INSERT_AT_END}/>
			</div>
		);
	}
}

InitiativeList.propTypes = {
	players: PropTypes.array
};

const mapStateToProps = (state) => {
	// denormalize initiative list
	let denormalizedState = [...state.initiativeList];
	denormalizedState = denormalizedState.map((playerId) => {
		return state.players.find((player) => {
			return player.id === playerId;
		});
	});	
	return {players: denormalizedState.filter(player => player && player.name)};
};

export default connect(
	mapStateToProps,
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(InitiativeList);

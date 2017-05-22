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
				{players.map(player =>
					<PlayerCard key={player.name} player={player} draggable={true}/>
				)}
				<InitiativeDropTarget dropAction={INITIATIVE_ACTIONS.INSERT_AT_END}/>

			</div>
		);
	}
}

InitiativeList.propTypes = {
	players: PropTypes.array
};

export default connect(
	(state) => ({ players: state.initiativeList}),
	(dispatch) => ({ actions: bindActionCreators(PLAYER_ACTIONS, dispatch) })
)(InitiativeList);
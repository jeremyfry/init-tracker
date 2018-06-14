import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/playerActions';
import TextInput from './textInput';
import DropdownInput from './DropdownInput';

class AddPlayerCard extends Component {
	render(){
		const options = ['Wizard', 'Cleric', 'Paladin'];
		const {name, playerClass, actions} = this.props;
		if (this.props.editing){
			return (
				<div className="player-card">
					<TextInput name="name" onChange={actions.newPlayerChange} value={name} placeholder="Name"/>
					<DropdownInput name="playerClass" onChange={actions.newPlayerChange} value={playerClass} options={options}/>
					<div onClick={actions.saveNewPlayer}>Save new player</div>
				</div>
			);
		}else{
			return (
				<div className="player-card player-card--addition" onClick={actions.editNewPlayer}>
					Add Player
				</div>
			);
		}
	}
}

AddPlayerCard.propTypes = {
	actions: PropTypes.object.isRequired,
	name: PropTypes.string,
	playerClass: PropTypes.string,
	editing: PropTypes.bool.isRequired
};

const mapStateToProps = (state) =>{
	return state.newPlayer;
};

export default connect(
	(state) => state.newPlayer,
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(AddPlayerCard);

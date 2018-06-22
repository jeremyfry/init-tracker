import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/playerActions';
import TextInput from './textInput';
import DropdownInput from './DropdownInput';
import NumberInput from './NumberInput';

class AddPlayerCard extends Component {
	render(){
		const classOptions = [
			'Barbarian',
			'Bard',
			'Cleric',
			'Druid',
			'Fighter',
			'Monk',
			'Paladin',
			'Ranger',
			'Rogue',
			'Sorcerer',
			'Warlock',
			'Wizard'
		];
		const ledPositions = [0,1,2,3,4,5,6,7];
		const { actions } = this.props;
		const {playerClass, ledPosition, editing} = this.props.player;
		if (editing){
			return (
				<div className="player-card player-card--editing">
					<TextInput 
						name="name"
						onChange={actions.newPlayerChange}
						value={this.props.player.name}
						label="Name"
					/>
					<NumberInput 
						name="ssdc"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.ssdc}
						label="Spell Save"
					/>
					<NumberInput 
						name="ac"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.ac}
						label="Armor Class"
					/>
					<NumberInput 
						name="pp"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.pp}
						label="Pass Percep."
					/>
					<NumberInput 
						name="str"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.str}
						label="Str"
					/>
					<NumberInput 
						name="dex"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.dex}
						label="Dex"
					/>
					<NumberInput
						name="wis"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.wis}
						label="Wis"
					/>
					<NumberInput 
						name="int"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.int}
						label="Int"
					/>
					<NumberInput 
						name="con"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.con}
						label="Con"
					/>
					<NumberInput 
						name="cha"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.cha}
						label="Cha"
					/>
					<NumberInput 
						name="init"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.init}
						label="Initative"
					/>
					<NumberInput 
						name="spd"
						onChange={actions.newPlayerChange}
						value={this.props.player.stats.spd}
						label="Speed"
					/>
					<DropdownInput
						name="playerClass"
						onChange={actions.newPlayerChange}
						value={playerClass}
						options={classOptions}
						label="Class"
					/>
					<DropdownInput
						name="ledPosition"
						onChange={actions.newPlayerChange}
						value={ledPosition}
						options={ledPositions}
						label="LED"
					/>
					<button
						className="add-player__save"
						onClick={actions.saveNewPlayer}>
						Save Player
					</button>
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
	editing: PropTypes.bool.isRequired,
	player: PropTypes.object
};

export default connect(
	(state) => ({player: state.newPlayer}),
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(AddPlayerCard);

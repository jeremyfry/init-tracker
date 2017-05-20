import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/playerActions';
import TextInput from './textInput';

class AddPlayerCard extends Component {
  constructor(props, context){
    super(props, context);
    this.formChange = this.formChange.bind(this);
  }

  formChange(name, value){
    this.props.actions.newPlayerChange(name, value);
  }

  render(){
    if(this.props.editing){
      return (
        <div>
          <TextInput name="name" onChange={this.formChange} value={this.props.name}/>
          <TextInput name="playerClass" onChange={this.formChange} value={this.props.playerClass}/>
          <div onClick={this.props.actions.saveNewPlayer}>Save new player</div>
        </div>
      );
    }else{
      return (
        <div onClick={this.props.actions.editNewPlayer}>
          Add Player
        </div>
      );
    }
  }
}

AddPlayerCard.propTypes = {
  actions: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  playerClass: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return state.newPlayer;
};

export default connect(
  mapStateToProps,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(AddPlayerCard);

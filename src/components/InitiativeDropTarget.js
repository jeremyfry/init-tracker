import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { DRAG_TYPES,  } from '../constants';

class InitiativeDropTarget extends Component {
	render(){
		const {connectDropTarget} = this.props;
		return connectDropTarget(
			<div className="drop-target">I'm a target</div>
		);
	}
}

const dropHandlers = {
	drop(props){
		return {
			action: props.dropAction
		};
	}
};

const dropConnect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget()
});

InitiativeDropTarget.propTypes = {
	dropAction: PropTypes.string.isRequired
};

export default DropTarget(DRAG_TYPES.PLAYER, dropHandlers, dropConnect)(InitiativeDropTarget);

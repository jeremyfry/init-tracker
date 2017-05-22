import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { DRAG_TYPES,  } from '../constants';
import {connect} from 'react-redux';

class InitiativeDropTarget extends Component {
	render(){
		let classNames = ['drop-target'];
		const {uiState, isOver, canDrop, connectDropTarget} = this.props;

		if(uiState.playerCardDragging){
			classNames.push('drop-target--active');
		}
		if(isOver && canDrop){
			classNames.push('drop-target--drop-hover');
		}

		return connectDropTarget(
			<div className={classNames.join(' ')}>Drop Here</div>
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
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
});

InitiativeDropTarget.propTypes = {
	dropAction: PropTypes.string.isRequired,
	cssClasses: PropTypes.array
};

export default connect(
	(state)=>({uiState: state.uiState}),
	{}
)(DropTarget(DRAG_TYPES.PLAYER, dropHandlers, dropConnect)(InitiativeDropTarget));

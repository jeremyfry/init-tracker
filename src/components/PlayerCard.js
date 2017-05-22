import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ClassImage from './ClassImage';
import { DRAG_TYPES, INITIATIVE_ACTIONS, MODIFIER_CLASSES } from '../constants';
import * as actions from '../actions/initiativeActions';
import * as uiActions from '../actions/uiActions';

class PlayerCard extends Component {
	render(){
		const {player, connectDragSource, connectDropTarget, cssClasses, isOver, canDrop} = this.props;
		let classNames = ['player-card', ...cssClasses];
		if(this.props.draggable){
			classNames.push(MODIFIER_CLASSES.IS_DRAGGABLE);
		}
		if(isOver && canDrop){
			classNames.push('player-card--drop-hover');
		}
		return connectDropTarget(connectDragSource(
			<div className={classNames.join(' ')}>
				<h3 className="player-card__name">{player.name}</h3>
				<ClassImage playerClass={player.playerClass}/>
				<h3 className="player-card__class">{player.playerClass}</h3>
			</div>
		));
	}
}


PlayerCard.propTypes = {
	player: PropTypes.object.isRequired,
	isDragging: PropTypes.bool,
	connectDragSource: PropTypes.func,
	draggable: PropTypes.bool,
	cssClasses: PropTypes.array.isRequired,
	dropTargets: PropTypes.bool
};

const dragHandlers = {
	beginDrag(props) {
		props.actions.updatePlayerDrag(true);
		return {
			id: props.player.id
		};
	},
	endDrag(props, monitor) {
		props.actions.updatePlayerDrag(false);
		let dropResults = monitor.getDropResult();
		if(dropResults){
			props.actions.insertPlayer(props.player.id, dropResults);
		}
	},
	canDrag(props){
		return props.draggable;
	}
};

const dragConnect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
});

const dropHandlers = {
	drop(props){
		return {
			id: props.player.id,
			action: INITIATIVE_ACTIONS.INSERT_BEFORE
		};
	},
	canDrop(props, monitor){
		return props.dropTarget && props.player.id !== monitor.getItem().id;
	}
};

const dropConnect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
});



const PlayerCardDragDrop = DropTarget(DRAG_TYPES.PLAYER, dropHandlers, dropConnect)(
	DragSource(DRAG_TYPES.PLAYER, dragHandlers, dragConnect)(PlayerCard)
);

export default connect(
	(state)=>({uiState: state.uiState}),
	(dispatch) => ({ actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) })
)(PlayerCardDragDrop);


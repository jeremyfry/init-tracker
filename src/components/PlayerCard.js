import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassImage from './ClassImage';
import { DRAG_TYPES, MODIFIER_CLASSES } from '../constants';
import * as initiativeActions from '../actions/initiativeActions';
import * as uiActions from '../actions/uiActions';
import * as playerActions from '../actions/playerActions'; 
import classNamesBuilder from '../tools/classNames';
import PlayerControls from './PlayerControls';
import AddPlayerCard from './AddPlayerCard';

class PlayerCard extends Component {
	constructor(props) {
		super();
		this.setEditable = () => {
			return () => this.props.actions.editExistingPlayer(this.props.player);
		}
	}
	render() {
		const {
			player, connectDragSource, connectDropTarget, cssClasses, isOver,
			canDrop, uiState, isDragging, isDropTarget, editable, showControls,
			actions } = this.props;
		const classNames = classNamesBuilder(['player-card', ...cssClasses],
			{
				[MODIFIER_CLASSES.IS_DRAGGABLE]: this.props.draggable,
				'player-card--drop-hover': (isOver && canDrop),
				'player-card--hidden': ((!isDragging && uiState.playerCardDragging === player.id && isDropTarget) || isDragging)
			});

		return connectDropTarget(connectDragSource(
			<div className={classNames}>
				{editable && <button onClick={this.setEditable()}>Edit</button>}
				<h3 className="player-card__name">{player.name}</h3>
				<ClassImage playerClass={player.playerClass} />
				<h3 className="player-card__class">{player.playerClass}</h3>
				{showControls && <PlayerControls player={player}></PlayerControls>}
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
	isDropTarget: PropTypes.bool,
	editable: PropTypes.bool,
	showControls: PropTypes.bool
};

const dragHandlers = {
	beginDrag(props) {
		props.actions.updateUiPlayerDrag(props.player.id);
		return {
			id: props.player.id,
			index: props.index
		};
	},
	endDrag(props) {
		props.actions.updateUiPlayerDrag(-1);
	},
	canDrag(props) {
		return props.draggable;
	}
};

const dragConnect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
});

const dropHandlers = {
	hover(props, monitor) {
		const dragItem = monitor.getItem();
		const newPosition = props.index;
		if (props.isDropTarget && props.player.id !== dragItem.id && dragItem.index !== newPosition) {
			props.actions.insertPlayerBefore(monitor.getItem().id, props.player.id);
			// Ahhh mutation. This is held outside the state by the library and doesn't update
			console.log(monitor.getItem(), newPosition, props.player.id);
			monitor.getItem().index = newPosition;

		}

	},
	canDrop(props, monitor) {
		return props.isDropTarget && props.player.id !== monitor.getItem().id;
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
	(state) => ({ uiState: state.uiState }),
	(dispatch) => ({ actions: bindActionCreators(Object.assign({}, initiativeActions, uiActions, playerActions), dispatch) })
)(PlayerCardDragDrop);


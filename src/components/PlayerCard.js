import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ClassImage from './ClassImage';
import { DRAG_TYPES, INITIATIVE_ACTIONS } from '../constants';
import * as actions from '../actions/initiativeActions';


class PlayerCard extends Component {
	render(){
		const {player, connectDragSource, connectDropTarget} = this.props;
		return connectDropTarget(connectDragSource(
			<div className="player-card">
				<h3 className="player-card__name">{player.name}</h3>
				<ClassImage playerClass={player.playerClass}/>
				<h3 className="player-card__class">{player.playerClass}</h3>
			</div>
		));
	}
}

const dragHandlers = {
	beginDrag(props) {
		return {
			id: props.player.id
		};
	},
	endDrag(props, monitor) {
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
	}
};

const dropConnect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget()
});


PlayerCard.propTypes = {
	player: PropTypes.object.isRequired,
	isDragging: PropTypes.bool,
	connectDragSource: PropTypes.func,
	draggable: PropTypes.bool
};

PlayerCard = DropTarget(DRAG_TYPES.PLAYER, dropHandlers, dropConnect)(
	DragSource(DRAG_TYPES.PLAYER, dragHandlers, dragConnect)(PlayerCard)
);

export default connect(
	()=>({}),
	(dispatch) => ({ actions: bindActionCreators(actions, dispatch) })
)(PlayerCard);


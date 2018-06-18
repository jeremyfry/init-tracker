import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as roundActions from '../actions/roundActions';



const RoundControl = (props) => {
    const {actions} = props;
    const next = () => {
        const pos = props.round.currentPosition;
        actions.setPosition(
            (pos + 1 >= props.initiativeList.length) ? 0 : pos + 1
        ).then((state) => {
            const index = state.currentRound.currentPosition;
            const nextIndex = (index + 1 >= props.initiativeList.length) ? 0 : index + 1;
            fetch(`http://192.168.137.2:2045/led/${ledForPlayer(pos, state)}/55/55/55`);
            fetch(`http://192.168.137.2:2045/led/${ledForPlayer(index, state)}/255/255/0`);
            fetch(`http://192.168.137.2:2045/pulse/${ledForPlayer(nextIndex, state)}/155/0/155`);
        });
    };

    const ledForPlayer = (pos, state) => {
        const id = state.initiativeList[pos];
        return state.players.filter(p => p.id === id)[0].ledPosition;
    }

    const previous = () => {
        const pos = props.round.currentPosition;
        props.actions.setPosition(
           pos === 0 ? props.initiativeList.length : pos - 1
        );
    };
    return (<div>
        <button onClick={props.actions.startRound}>Start Round</button>
        <button onClick={previous}>Previous Character</button>
        <button onClick={next}>Next Character</button>
    </div>);
}

export default connect(
    (state) => {
        console.log(state);
        return { round: state.currentRound, initiativeList: state.initiativeList }
    },
    (dispatch) => ({ actions: bindActionCreators({ ...roundActions }, dispatch) })
)(RoundControl);


import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { PLAYER_ACTIONS } from '../actions/playerActions';

export const PlayersCollection = (props) => {

  return (
    <div>
      Player collection
      {JSON.stringify(props)}
      {/*{props.players.map(value =>*/}
      {/*<div>test</div>*/}
      {/*)}*/}
    </div>
  );
};

PlayersCollection.propTypes = {
  players: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log('test');
  return {
    players: state.players,
    test: state.routing
  };
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PLAYER_ACTIONS, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersCollection);

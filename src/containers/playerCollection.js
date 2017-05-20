import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { PLAYER_ACTIONS } from '../constants';
import PlayerCard from '../components/playerCard';
import AddPlayerCard from '../components/addPlayerCard';

const PlayersCollectionComponent = (props) => {
  return (
    <div>
      {props.players.map(player =>
        <PlayerCard key={player.name} player={player}/>
      )}
      <AddPlayerCard/>
    </div>
  );
};

PlayersCollectionComponent.propTypes = {
  players: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    players: state.players
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
)(PlayersCollectionComponent);

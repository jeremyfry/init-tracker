import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = ({player}) => {
  return (
    <div>
      I'm a player
      {player.name}
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerCard;

import React from 'react';
import PropTypes from 'prop-types';

const ClassImage = ({playerClass}) =>{
	const classImage = '/images/'+playerClass.toLowerCase()+'.png';
	return (
		<img className='player-card__class-image' src={classImage}/>
	);
};

ClassImage.propTypes = {
	playerClass: PropTypes.string.isRequired
};

export default ClassImage;

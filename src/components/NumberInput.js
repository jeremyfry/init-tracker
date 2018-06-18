import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <label className="add-player__label">
      <span >{props.label}</span>
      <input
        className="add-player__input"
        type="number"
        min="0"
        step="1"
        max={props.max || 20}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange} />
    </label>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string.isRequired,
  max: PropTypes.number
};

export default TextInput;

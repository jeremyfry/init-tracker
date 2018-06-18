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
        type="text"
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
  label: PropTypes.string.isRequired
};

export default TextInput;

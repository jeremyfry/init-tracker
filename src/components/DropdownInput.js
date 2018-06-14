import React from 'react';
import PropTypes from 'prop-types';

const DropdownInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  const options = props.options.map(option => <option>{option}</option>);

  return (
    <select
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}>
        <option>Select a class</option>
        {options}
    </select>
  );
};

DropdownInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array
};

export default DropdownInput;

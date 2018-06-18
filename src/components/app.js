import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
    	<div>
			{/* <Nav/> */}
			{this.props.children}
		</div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

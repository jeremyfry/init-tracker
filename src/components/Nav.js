import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
	return (
		<nav className="nav">
			<IndexLink to="/" className="nav__link" activeClassName="nav__link--active">Players</IndexLink>
			<Link to="/i" className="nav__link" activeClassName="nav__link--active">Initiative</Link>
		</nav>
	);
};

export default Nav;

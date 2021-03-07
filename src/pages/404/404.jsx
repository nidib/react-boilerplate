import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<h1>404. Not found</h1>
		</>
	);
};

export default NoMatch;
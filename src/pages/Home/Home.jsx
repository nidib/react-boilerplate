import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
	render() {
		return (
			<>
				<Link to="/about">About</Link>
				<h1>Home</h1>
			</>
		);
	}
}

export default Home;
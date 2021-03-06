import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Books extends PureComponent {
	render() {
		return (
			<>
				<Link to="/">Home</Link>
				<h1>About</h1>
			</>
		);
	}
}

export default Books;
import React, { Component } from 'react';
import { Link } from 'react-router';

class IndexPage extends Component {
	render() {
		return (
			<div>
				{
					this.props.children || 
					<div>
						<h1>Home Page</h1>
						<Link to='dash'>Go to Dash</Link>
					</div>
				}
			</div>
		);
	}
}

export default IndexPage;

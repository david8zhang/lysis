import React, { Component } from 'react';
import { SidescrollList } from '../../../components';

class RecommendedMenuContainer extends Component {
	render() {
		return (
			<div>
				<SidescrollList
					style={{ marginLeft: '50px' }}
					items={this.props.items}
				/>
			</div>
		);
	}
}

export default RecommendedMenuContainer;

import React, { Component } from 'react';
import { Panel, ProfileList } from '../../../components';

class PastCollabContainerExpended extends Component {
	render() {
		return (
			<Panel
				style={{
					width: '100%',
					height: '100%',
					paddingTop: '25px',
					paddingBottom: '75px'
				}}
			>
				<ProfileList
					headerText='Videos'
					collabTitle={this.props.title}
					profiles={this.props.profiles}
				/>
			</Panel>
		);
	}
}

export default PastCollabContainerExpended;

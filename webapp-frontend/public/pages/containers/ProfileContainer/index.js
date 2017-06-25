import React, { Component } from 'react';
import { Panel, Profile } from '../../../components';

class ProfileContainer extends Component {
	render() {
		return (
			<Panel 
				style={{
					width: '100%',
					height: '100%',
					paddingTop: '25px',
					paddingBottom: '25px',
					textAlign: 'center'
				}}
			>
				<Profile
					profileSrc={this.props.profileSrc}
					username={this.props.username}
					description={this.props.description}
					stats={this.props.stats}
				/>
			</Panel>
		);
	}
}

export default ProfileContainer;

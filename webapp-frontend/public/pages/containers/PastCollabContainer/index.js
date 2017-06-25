import React, { Component } from 'react';
import { Panel, ProfileList, VideoBox } from '../../../components';

class PastCollabContainer extends Component {
	render() {
		return (
			<div 
				style={{
					height: '100%',
					width: '100%'
				}}
			>
				<Panel 
					style={{ 
						height: '40%',
						paddingTop: '25px',
						paddingBottom: '25px',
						width: '100%',
						borderRadius: '20px 20px 0px 0px'
					}}
				>
					<ProfileList 
						profiles={this.props.profiles}
						headerText='Videos'
						collabTitle='Recent Collaborators'
					/>
				</Panel>
				<Panel
					style={{
						height: '60%',
						paddingTop: '25px',
						paddingBottom: '25px',
						width: '100%',
						borderRadius: '0px 0px 20px 20px'
					}}
				>
					<VideoBox 
						height='400'
						title='Most Recent Collaboration'
						videoSrc='http://player.twitch.tv/?channel=esl_sc2'
					/>
				</Panel>
			</div>
		);
	}
}

export default PastCollabContainer;

import React, { Component } from 'react';
import { Panel, VideoBox } from '../../../components';

class VideoBoxContainer extends Component {
	render() {
		return (
			<Panel
				style={{
					width: '100%',
					height: '100%',
					paddingTop: '25px',
					paddingBottom: '25px'
				}}
			>
				<VideoBox
					height={this.props.height} 
					title={this.props.title}
					videoSrc={this.props.videoSrc}
				/>
			</Panel>
		);
	}
}

export default VideoBoxContainer;

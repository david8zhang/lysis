import React, { Component } from 'react';
import styles from './styles.css';

class VideoBox extends Component {
	render() {
		return (
			<div 
				className={styles.videoBox}
				style={this.props.style}
			>
				<h2>{this.props.title}</h2>
				{
					!this.props.dummy &&
					<iframe
						style={{ margin: '0px' }}
						allowFullScreen
						src={this.props.videoSrc}
						height={this.props.height}
						width='100%'
					/>
				}
			</div>
		);
	}
}

export default VideoBox;

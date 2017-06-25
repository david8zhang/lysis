import React, { Component } from 'react';
import styles from './styles.css';

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: this.props.defaultActive
		};
	}
	componentDidMount() {
		setInterval(() => {
			const newState = (this.state.active + 1) % this.props.nodes.length;
			this.setState({
				active: newState
			});
			this.props.clickHandler(newState);
		}, 10000);
	}
	renderTimeline() {
		const timeline = [];
		this.props.nodes.forEach((node, index) => {
			const width = Math.floor(100 / (this.props.nodes.length * 2));
			let nodeStyle = styles.node;
			let edgeStyle = styles.edge;
			if (index === this.state.active) {
				nodeStyle = `${styles.node} ${styles.active}`;
				edgeStyle = `${styles.edge} ${styles.active}`;
			}
			const leftWidth = width / 4;
			const rightWidth = width / 4;
			const leftStyle = { width: `${leftWidth}%` };
			const rightStyle = { width: `${rightWidth}%` };
			if (index === 0) {
				leftStyle.width = `${width / 2}%`;
				leftStyle.borderRadius = '10px 0px 0px 10px';
			} else if (index === this.props.nodes.length - 1) {
				rightStyle.width = `${width / 2}%`;
				rightStyle.borderRadius = '0px 10px 10px 0px';
			}
			timeline.push(
				<div 
					key={`left edge ${index}`}
					className={edgeStyle} 
					style={leftStyle} 
				/>
			);
			timeline.push(
				<div
					key={`node ${index}`} 
					className={nodeStyle}
					onClick={() => {
						this.setState({
							active: index
						});
						this.props.clickHandler(index);
					}}
				>
					{ node }
				</div>
			);
			timeline.push(
				<div 
					key={`right edge ${index}`}
					className={edgeStyle} 
					style={rightStyle} 
				/>
			);
		});
		return timeline;
	}
	render() {
		return (
			<div className={styles.timeline}>
				{ this.renderTimeline() }
			</div>
		);
	}
}

export default Timeline;

import React, { Component } from 'react';
import CircularProgressBar from 'react-circular-progressbar';
import { Panel } from '../../../components';
import styles from './styles.css';

class OverlappingContainer extends Component {
	render() {
		return (
			<Panel
				title='Average Sentiment'
				style={{
					width: '100%',
					height: '100%',
					paddingTop: '25px',
					paddingBottom: '25px'
				}}
			>
				{
					this.props.beforeAfter &&
					<div className={`${styles.overlap} row`}>
						<div className='one-half column' style={{ paddingRight: '20px' }}>
							<h2>Before Collab</h2>
							<CircularProgressBar 
								percentage={30}
								strokeWidth={5}
							/>
						</div>
						<div className='one-half column' style={{ paddingLeft: '20px' }}>
							<h2>After Collab</h2>
							<CircularProgressBar 
								percentage={80}
								strokeWidth={5}
							/>
						</div>
					</div>
				}
				{
					!this.props.beforeAfter &&
					<div className={`${styles.potOverlap}`}>
						<CircularProgressBar
							percentage={23}
							strokeWidth={5}
						/>
					</div>
				}
			</Panel>
		);
	}
}

OverlappingContainer.defaultProps = {
	beforeAfter: true
};

export default OverlappingContainer;

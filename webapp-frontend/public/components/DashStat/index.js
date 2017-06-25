import React, { Component } from 'react';
import styles from './styles.css';

class DashStat extends Component {
	render() {
		let sign = '+';
		if (this.props.change === 'down') {
			sign = '-';
		}
		return (
			<div 
				className={`${styles.dashStat} row`}
				style={this.props.style}
			>
				<div className={`${styles.title} one-half column`}>
					{this.props.title}
				</div>
				<div className={`${styles[this.props.change]} one-half column`}>
					{`${sign} ${this.props.value}%`}
				</div>
			</div>
		);	
	}
}

export default DashStat;

import React, { Component } from 'react';
import { DashStat, Panel } from '../../../components';

class DashStatContainer extends Component {
	renderStats() {
		return this.props.stats.map((stat, index) => (
			<div key={`${stat.title} ${index}`}>
				<DashStat
					title={stat.title}
					value={stat.value}
					change={stat.change}
				/>
				<hr
					style={{
						margin: '0px',
						borderColor: 'white',
						align: 'center',
						marginRight: '50px',
						marginLeft: '50px'
					}}
				/>
			</div>
		));
	}
	render() {
		return (
			<Panel
				title='Daily Stats' 
				style={{
					width: '100%',
					height: '100%',
					paddingTop: '25px',
					paddingBottom: '25px'
				}}
			>
				<div style={{ backgroundColor: '#E6E6E6' }}>
					{this.renderStats()}
				</div>
			</Panel>
		);
	}
}

export default DashStatContainer;

import React, { Component } from 'react';
import { Panel, DataChart } from '../../../components';

class DataChartContainer extends Component {
	render() {
		return (
			<Panel 
				title={this.props.title}
				style={{ 
					width: '100%', 
					height: '100%',
					paddingBottom: '25px',
					paddingTop: '25px'
				}}
			>
				<DataChart
					id={this.props.id}
					dark={false}
					options={this.props.options}
					style={{ margin: '0px', padding: '0px' }}
				/>
			</Panel>
		);
	}
}

export default DataChartContainer;

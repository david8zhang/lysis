import React, { Component } from 'react';
import _ from 'lodash';
import styles from './styles.css';
import { theme } from './darkTheme';

const Highcharts = require('highcharts');

class DataChart extends Component {
	componentDidMount() {
		if (this.props.dark) {
			Highcharts.setOptions(theme);
		}
		const containerRef = `container${this.props.id}`;
		this.chart = new Highcharts.chart(
			containerRef,
			this.props.options
		);
	}

	componentWillReceiveProps(nextProps) {
		if (!_.isEqual(this.props.options, nextProps.options)) {
			if (nextProps.id === this.props.id) {
				const containerRef = `container${nextProps.id}`;
				this.chart = new Highcharts.chart(
					containerRef,
					nextProps.options
				);
			}
		}
	}

	render() {
		return (
			<div 
				className={styles.dataChart}
				style={{
					...this.props.style,
					backgroundColor: this.props.bg
				}}
			>
				<div id={`container${this.props.id}`} />
			</div>
		);
	}
}

DataChart.propTypes = {
	options: React.PropTypes.object.isRequired,
	id: React.PropTypes.number.isRequired
};

DataChart.defaultProps = {
	dark: true
};

export default DataChart;

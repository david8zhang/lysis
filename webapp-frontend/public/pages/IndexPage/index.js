import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	DataChartContainer,
	OverlappingContainer,
	DashStatContainer,
	ActivityContainer
} from '../containers';
import { Navbar } from '../../components';
import { options } from './dummy';

class IndexPage extends Component {
	render() {
		return (
			<div style={{ backgroundColor: '#ddd' }}>
				<Navbar title='Lysis Analytics' preset='dash' />
				<div 
					className='row' 
					style={{ 
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '30px' 
					}}
				>
					<div 
						className='three columns' 
						style={{ 
							paddingTop: '20px',
							paddingLeft: '20px',
							paddingBottom: '20px',
							paddingRight: '10px'
						}}
					>
						<OverlappingContainer
							beforeAfter={false}
						/>
					</div>
					<div 
						className='six columns' 
						style={{
							paddingTop: '20px',
							paddingLeft: '10px',
							paddingBottom: '20px',
							paddingRight: '20px',
							marginLeft: '0px'
						}}
					>
						<DataChartContainer 
							options={options} 
							id={1}
							title='Total Activity'
						/>
					</div>
					<div 
						className='three columns' 
						style={{
							paddingTop: '20px',
							paddingLeft: '10px',
							paddingBottom: '20px',
							paddingRight: '20px',
							marginLeft: '0px'
						}}
					>
						<DashStatContainer 
							stats={[{
								title: 'Sentiment',
								value: '2',
								change: 'down'
							}, {
								title: 'Message Count',
								value: '13',
								change: 'up'
							}, {
								title: 'Preventions',
								value: '130',
								change: 'up'
							}]}
						/>
					</div>
				</div>
				<ActivityContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{
		chat: state.chat,
		message: state.message
	}
);

export default connect(mapStateToProps, null)(IndexPage);

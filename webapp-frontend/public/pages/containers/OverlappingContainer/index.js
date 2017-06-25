import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgressBar from 'react-circular-progressbar';
import { Panel } from '../../../components';
import styles from './styles.css';

const words = [
	'Disillusioned',
	'Depressed',
	'Isolated',
	'Lonely'
];

class OverlappingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: 23
		};
	}
	componentDidMount() {
		const { subscription } = this.props.chat;

		/* publish a message after being subscribed to sync on subscription */
		subscription.on('enter-subscribed', () => {
			console.log('Joined the channel!');
		});

		/* set callback for PDU with specific action */
		subscription.on('rtm/subscription/data', (pdu) => {
			pdu.body.messages.forEach((msg) => {
				console.log('Message', msg);
				this.setState({
					percentage: Math.floor(Math.random() * 34)
				});
			});
		});
	}

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
						<p style={{ fontSize: '13px', textAlign: 'center' }}>
							{`The most common word: ${words[Math.floor(Math.random() * words.length)]}`}
						</p>
						<CircularProgressBar
							percentage={this.state.percentage}
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

const mapStateToProps = (state) => (
	{
		chat: state.chat
	}
);

export default connect(mapStateToProps, null)(OverlappingContainer);

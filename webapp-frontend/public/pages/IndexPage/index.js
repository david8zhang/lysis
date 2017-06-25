import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndexPage extends Component {
	componentDidMount() {
		const { subscription, rtm } = this.props.chat;

		/* publish a message after being subscribed to sync on subscription */
		subscription.on('enter-subscribed', () => {
			console.log('Joined the channel!');
		});

		/* set callback for PDU with specific action */
		subscription.on('rtm/subscription/data', (pdu) => {
			pdu.body.messages.forEach((msg) => {
				console.log(msg);
			});
		});
		rtm.start();
	}

	componentWillUnmount() {
		const { subscription, rtm } = this.props.chat;
		rtm.unsubscribe(subscription.subscriptionId);
		rtm.stop();
		console.log('Unmounting component!');
	}

	render() {
		console.log('Message', this.props.message);
		return (
			<div>
				{
					this.props.children ||
					<div>
						<h1>Home Page</h1>
					</div>
				}
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

export default connect(mapStateToProps, actions)(IndexPage);

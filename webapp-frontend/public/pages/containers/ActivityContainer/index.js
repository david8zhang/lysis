import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Panel } from '../../../components';

class ActivityContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
	}
	componentDidMount() {
		const { subscription, rtm } = this.props.chat;

		/* publish a message after being subscribed to sync on subscription */
		subscription.on('enter-subscribed', () => {
			console.log('Joined the channel!');
		});

		/* set callback for PDU with specific action */
		subscription.on('rtm/subscription/data', (pdu) => {
			pdu.body.messages.forEach((msg) => {
				this.setState((previousState) => (
					{
						messages: previousState.messages.concat(msg)
					}
				));
				this.scrollToBottom();

			});
		});
		rtm.start();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	componentWillUnmount() {
		const { subscription, rtm } = this.props.chat;
		rtm.unsubscribe(subscription.subscriptionId);
		rtm.stop();
		console.log('Unmounting component!');
	}

	appendMessages() {
		return this.state.messages.map((message) => (
			<p style={{ marginLeft: '30px' }}>
				{ message }
			</p>
		));
	}

	scrollToBottom() {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		node.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
				<Panel
					title='Live Message Stream'
					hasPadding
					style={{ width: '100%' }}
				>
					<div style={{ height: '100px', overflowY: 'scroll' }}>
						{ this.appendMessages() }
						<div 
							style={{ float:'left', clear: 'both' }}
							ref={(el) => { this.messagesEnd = el; }}
						/>
					</div>
				</Panel>
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

export default connect(mapStateToProps, null)(ActivityContainer);

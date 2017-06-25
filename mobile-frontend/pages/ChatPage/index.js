import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

const uid = Date.now();

const avatars = [
	'http://data.whicdn.com/images/16682170/original.jpg',
	'https://pbs.twimg.com/media/C-mpKTgU0AAnO8E.jpg'
];

const avatar = avatars[Math.floor(Math.random() * 2)];

class ChatPage extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.onSend = this.onSend.bind(this);
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
				const messages = JSON.parse(msg);
				this.setState((previousState) => (
					{
						messages: GiftedChat.append(previousState.messages, messages)
					}
				));
			});
		});
		rtm.start();
	}

	componentWillUnmount() {
		const { rtm } = this.props.chat;
		rtm.stop();
	}

	onSend(messages = []) {
		const { rtm, channel } = this.props.chat;
		/** Send a message to the open channel via the Satori SDK */
		rtm.publish(channel, JSON.stringify(messages), (pdu) => {
			console.log('Sent new message', messages, pdu);
		});
	}

	render() {
		console.log(this.props.chat);
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={this.onSend}
				user={{
					_id: uid,
					avatar
				}}
			/>
		);
	}
}

const mapStateToProps = (state) => (
	{
		chat: state.chat
	}
);

export default connect(mapStateToProps, null)(ChatPage);

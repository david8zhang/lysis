import React, { Component } from 'react';
import { Link } from 'react-router';

const RTM = require('satori-sdk-js');

const endpoint = 'wss://open-data.api.satori.com';
const appkey = '2E8A29cd03cB6A6f9Ea8cdc1b22DCbe0';
const role = 'lysis-chat';
const roleSecretKey = '2e77DE6959EF0FD8cb14F189dCBde17C';
const channel = 'lysis-chat';

const roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

const rtm = new RTM(endpoint, appkey, {
	authProvider: roleSecretProvider,
});

let subscription;

class DashPage extends Component {
	componentDidMount() {
		subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
		console.log('Subscribe', subscription);

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
		rtm.unsubscribe(subscription.subscriptionId);
		rtm.stop();
		console.log('Unmounting component!');
	}
	render() {
		return (
			<div>
				<h1>Dash Page</h1>
				<br />
				<Link to='/'>Go Home</Link>
			</div>
		);
	}
}

export default DashPage;

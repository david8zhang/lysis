import React, { Component } from 'react';
import { View } from 'react-native';
import { Navbar } from '../../components';

class ChatPage extends Component {
	render() {
		return (
			<View>
				<Navbar title='Chat Room' />
			</View>
		);
	}
}

export default ChatPage;

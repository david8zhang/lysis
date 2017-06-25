import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Form } from '../../components';

class HomePage extends Component {
	render() {
		const handlers = [{
			title: 'Log In',
			backgroundColor: '#39AEF8',
			onPress: (value) => {
				console.log('Value', value);
				Actions.chatRooms();
			}
		}, {
			title: 'Sign In',
			backgroundColor: '#00C853',
			onPress: (value) => {
				console.log('Value', value);
				Actions.chatRooms();
			}
		}];

		return (
			<View>
				<Navbar title='Home' />
				<Form handlers={handlers} />
			</View>
		);
	}
}

export default HomePage;

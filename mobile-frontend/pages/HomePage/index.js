import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Navbar, Form } from '../../components';


class HomePage extends Component {
	render() {
		const handlers = [{
			title: 'Log In',
			backgroundColor: '#39AEF8',
			onPress: (value) => {
				console.log('Log In', value);
			}
		}, {
			title: 'Sign In',
			backgroundColor: '#00C853',
			onPress: (value) => {
				console.log('Sign In', value);
			}
		}];

		return (
			<View>
				<Navbar title='Home' />
				<Button
					title='Go To Chat'
					onPress={() => Actions.chat()}
				/>
				<Button
					title='Go To Chat Rooms Page'
					onPress={() => Actions.chatRooms()}
				/>
				<Button
					title='Create new chat'
					onPress={() => Actions.new()}
				/>
				<Form handler={handlers} />
			</View>
		);
	}
}

export default HomePage;

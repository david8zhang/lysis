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
			}
		}, {
			title: 'Sign In',
			backgroundColor: '#00C853',
			onPress: (value) => {
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
			<Form handler={handlers}/>
			</View>
		);
	}
}

export default HomePage;

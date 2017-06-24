import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Navbar } from '../../components';

class HomePage extends Component {
	render() {
		return (
			<View>
				<Navbar title='Home' />
				<Button 
					title='Go To Chat' 
					onPress={() => Actions.chat()}
				/>
			</View>
		);
	}
}

export default HomePage;

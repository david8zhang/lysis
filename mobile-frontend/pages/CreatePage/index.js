import React, { Component } from 'react';
import { View } from 'react-native';
import { Navbar } from '../../components';

class CreatePage extends Component {
	render() {
		return (
			<View>
				<Navbar title='Create New Chat' />
			</View>
		);
	}
}

export default CreatePage;

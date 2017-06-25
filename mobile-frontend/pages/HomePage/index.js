import React, { Component } from 'react';
import { View, Image } from 'react-native';
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

		const { imageStyle, imageWrapperStyle } = styles;

		return (
			<View>
				<Navbar title='Home' />
				<View style={imageWrapperStyle}>
					<Image
						style={imageStyle}
						source={require('../../images/logo.png')}
					/>
				</View>
				<Form handlers={handlers} />
			</View>
		);
	}
}

const styles = {
	imageStyle: {
		height: 300,
		width: 300,
		resizeMode: 'contain',
	},
	imageWrapperStyle: {
		alignItems: 'center'
	}
};

export default HomePage;

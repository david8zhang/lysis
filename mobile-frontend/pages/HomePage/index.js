import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { Navbar } from '../../components';

class HomePage extends Component {
	render() {
		const { 
			imageStyle,
			imageWrapperStyle,
			buttonStyle,
			descriptionStyle
		} = styles;
		return (
				<View>
					<Navbar title='Home' />
					<View style={imageWrapperStyle}>
						<Image
							style={imageStyle}
							source={require('../../images/logo.png')}
						/>
					</View>
					<Text style={descriptionStyle}>
						A community for de-radicalization and 
						belonging
					</Text>
					<Button
						style={buttonStyle}
						title='Go'
						onPress={() => Actions.chatRooms()}
						backgroundColor='#39AEF8'
					/>
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
	},
	buttonStyle: {
		margin: 10
	},
	descriptionStyle: {
		padding: 20,
		textAlign: 'center',
		fontSize: 20,
		color: '#1ABC9C'
	}
};

export default HomePage;

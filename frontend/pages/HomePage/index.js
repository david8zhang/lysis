import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomePage extends Component {
	render() {
		const { textStyle } = styles;
		return (
			<View>
				<Text style={textStyle}>
					
				</Text>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		margin: 100
	}
};

export default HomePage;

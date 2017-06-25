import React, { Component } from 'react';
import { View } from 'react-native';
import { Navbar, Form } from '../../components';

class CreatePage extends Component {
	render() {
		const inputs = [{
			key: 'name',
			label: 'Chat Name'
		}, {
			key: 'description',
			label: 'Chat Description',
			multiline: true,
			numberOfLines: 4,
			style: {
			}
		}];

		const handlers = [{
			title: 'Create Chat',
			backgroundColor: '#39AEF8',
			onPress: (value) => {
				console.log('Create Chat', value);
			}
		}];
		return (
			<View>
				<Navbar title='Create New Chat' />
				<Form inputs={inputs} handlers={handlers} />
			</View>
		);
	}
}

export default CreatePage;

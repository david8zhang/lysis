import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import * as actions from '../../actions';
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
				const { name, description } = value;
				this.props.addRoom({
					name,
					description,
					active: '1 Person Active',
					img: 'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
					key: this.props.rooms.length
				});
				Actions.chatRooms();
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

const mapStateToProps = (state) => (
	{
		rooms: state.rooms
	}
);

export default connect(mapStateToProps, actions)(CreatePage);

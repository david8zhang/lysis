import { default as types } from '../actions/types';

const initialState = [{
	key: 0,
	img: 'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
	name: 'Chat Room 1',
	description: 'Chatting about belonging',
	active: '3 People Active'
}, {
	key: 1,
	img: 'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
	name: 'Chat Room 2',
	description: 'Chatting about loneliness',
	active: '3 People Active'
}];

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_ROOM: {
			return state.concat(action.payload);
		}
		default:
			return state;
	}
};

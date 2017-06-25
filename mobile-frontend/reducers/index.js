import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import roomsReducer from './roomsReducer';

export default combineReducers({
	chat: chatReducer,
	rooms: roomsReducer
});

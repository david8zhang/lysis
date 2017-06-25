import { default as types } from './types';

export const addRoom = (room) => (
	{
		type: types.ADD_ROOM,
		payload: room
	}
);

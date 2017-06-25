import { default as types } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_MESSAGE: {
			return state.concat(action.payload);
		}
		default:
			return state;
	}
};

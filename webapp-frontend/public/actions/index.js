import { default as types } from './types';

/**
 * Add a message to the redux store message key
 * @param  {String} message The message received via the chat stream
 * @return {Object}         The action to be dispatched to the reducer
 */
export const addMessage = (message) => (
	{
		type: types.ADD_MESSAGE,
		payload: message
	}
);

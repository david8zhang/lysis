const RTM = require('satori-sdk-js');

const endpoint = 'wss://open-data.api.satori.com';
const appkey = '2E8A29cd03cB6A6f9Ea8cdc1b22DCbe0';
const role = 'lysis-chat';
const roleSecretKey = '2e77DE6959EF0FD8cb14F189dCBde17C';
const channel = 'lysis-chat';

const roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

const rtm = new RTM(endpoint, appkey, {
	authProvider: roleSecretProvider,
});

const initialState = {
	subscription: rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE),
	channel,
	rtm
};

export default (state = initialState, action) => state;

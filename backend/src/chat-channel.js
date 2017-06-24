var RTM = require('satori-rtm-sdk');

/* Configuration for subbing the Lysis Chat open channel */
var endpoint = "wss://open-data.api.satori.com";
var appkey = "2E8A29cd03cB6A6f9Ea8cdc1b22DCbe0";
var role = "lysis-chat";
var roleSecretKey = "2e77DE6959EF0FD8cb14F189dCBde17C";
var channel = "lysis-chat";

var roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

var rtm = new RTM(endpoint, appkey, {
  authProvider: roleSecretProvider,
});

var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

/* publish a message after being subscribed to sync on subscription */
subscription.on('enter-subscribed', function () {
  rtm.publish(channel, "Hello, World!", function (pdu) {
    console.log("Publish ack:", pdu);
  });
});

/* set callback for PDU with specific action */
subscription.on('rtm/subscription/data', function (pdu) {
  pdu.body.messages.forEach(function (msg) {
    console.log('Got message:', msg);
  });
  // close client after receving one message
  rtm.stop();
});

rtm.start();


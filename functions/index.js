const functions = require('firebase-functions');

exports.sendWelcomeEmail = functions.auth.user().onCreate(function (event) {
  console.log('JOINED:' + event.data.email);
});


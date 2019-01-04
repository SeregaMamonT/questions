const admin = require('firebase-admin');
const serviceAccount = require('./messaging-mamo-firebase-adminsdk.json');

admin.initializeApp({
  credential: serviceAccount && admin.credential.cert(serviceAccount),
  databaseURL: "https://messaging-mamo.firebaseio.com"
});

module.exports = admin;

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require("./messaging-mamo-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://messaging-mamo.firebaseio.com"
});

exports.helloWorld = functions.https.onCall((data, context) => {
  const { auth } = context;
  if (auth.token.email === 'salexetovich@gmail.com') {
    return admin.auth().listUsers().then(res => {
      return res.users;
    });
  }
  else {
    return 'Hi, user!';
  }
});

exports.setRole = functions.https.onCall((data, context) => {
  const { auth } = context;
  const { email, role } = data;
  if (auth.token.email === 'salexetovich@gmail.com') {
    admin.auth().getUserByEmail(email)
      .then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {[role]: true});
      });
  }
  else {
    return 'Hi, user!';
  }
});


const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require("./messaging-mamo-firebase-adminsdk-d48dj-a44129bc5f.json");

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


const functions = require('firebase-functions');

exports.helloWorld = functions.https.onCall((data, context) => {
  const { auth } = context;
  if (auth.token.email === 'salexetovich@gmail.com') {
    return {
      message: 'Hi, mamodmin!'
    };
  }
  else {
    return 'Hi, user!';
  }
});


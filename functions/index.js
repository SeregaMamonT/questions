const functions = require('firebase-functions');
const admin = require('./admin');

const isSuperAdmin = require('./rolesHelper').isSuperAdmin;

exports.listUsers = functions.https.onCall((data, context) => {
  return isSuperAdmin(context)
    .then(() => admin.auth().listUsers().then(res => res.users))
    .catch(() => []);
});

exports.setRole = functions.https.onCall((data, context) => {
  const { email, role } = data;
  return isSuperAdmin(context).then(() => {
    return admin.auth().getUserByEmail(email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, { [role]: true });
    });
  });
});

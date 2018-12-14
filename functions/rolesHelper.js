const admin = require('./admin');

function checkRoles(context, roles) {
  return new Promise((resolve, reject) => {
    const { auth } = context;
    return admin.auth().getUser(auth.uid).then(({customClaims}) => {
      if (customClaims && roles.find(role => customClaims[role] === true)) {
        return resolve()
      }
      else {
        return reject(new Error('User is not authorized to perform this action.'));
      }
    });
  });
}

function isSuperAdmin(context) {
  return checkRoles(context, ['superadmin']);
}

module.exports = {
  checkRoles,
  isSuperAdmin
};

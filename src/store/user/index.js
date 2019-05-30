import firebase, {Firebase} from 'app/firebase';
import {SET_PROFILE, LOGOUT, SET_IS_ADMIN} from './mutations';

const state = {
  profile: {},
  loggedIn: false,
  isAdmin: false,
};

const getters = {
  profile: state => state.profile,
  loggedIn: state => state.loggedIn,
  isAdmin: state => state.isAdmin,
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.loggedIn = true;
    state.profile = {
      email: profile.email,
    };
  },

  [SET_IS_ADMIN](state, isAdmin) {
    state.isAdmin = isAdmin;
  },

  [LOGOUT](state) {
    state.loggedIn = false;
    state.isAdmin = false;
    state.profile = {};
  },
};

const actions = {
  onAuthStateChanged({ commit }, user) {
    commit(SET_PROFILE, user);
    firebase.auth().currentUser.getIdTokenResult(false)
      .then(result => {
        commit(SET_IS_ADMIN, result.claims.superadmin === true);
      });
  },

  register({ commit }, { email, password }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(console.log)
      .catch(console.log);
  },

  login({ commit }, { email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('signInWithEmailAndPassword', res);
        commit(SET_PROFILE, res.user);
      })
      .catch(err => console.log('Login failed', err));
    // TODO: async/await
  },

  logout() {
    return firebase.auth().signOut()
      .then(res => {
        console.log('Logged out', res);
      })
      .catch(err => console.log('Logout failed', err));
  },

  changePassword(context, { oldPassword, newPassword }) {
    const email = firebase.auth().currentUser.email;
    const credential = Firebase.auth.EmailAuthProvider.credential(email, oldPassword);

    firebase.auth().currentUser.reauthenticateWithCredential(credential)
      .then(() => {
        firebase.auth().currentUser.updatePassword(newPassword)
          .then(() => console.log('changed'))
          .catch(() => console.log('failed'));
      })
      .catch(() => console.log('wrong password'));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

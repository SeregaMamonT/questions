import firebase from '../../firebase';
import {SET_PROFILE, LOGOUT} from './mutations';

const state = {
  profile: {},
  loggedIn: false
};

const getters = {
  profile: state => state.profile,
  loggedIn: state => state.loggedIn,
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.loggedIn = true;
    state.profile = {
      email: profile.email
    };
  },

  [LOGOUT](state) {
    state.loggedIn = false;
    state.profile = {};
  }
};

const actions = {
  login({commit}, credentials) {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(res => {
          console.log('signInWithEmailAndPassword', res);
          commit(SET_PROFILE, res.user);
        })
        .catch(err => console.log('Login failed', err));
    // TODO: async/await
  },

  logout() {
    firebase.auth().signOut()
        .then(res => {
          console.log('Logged out', res);
        })
        .catch(err => console.log('Logout failed', err));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
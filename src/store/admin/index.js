import firebase from 'app/firebase';
import {SET_USERS} from './mutations';

const state = {
  users: [],
};

const getters = {
  users: state => state.users,
};

const mutations = {
  [SET_USERS](state, users) {
    state.users = [...users];
  },
};

const actions = {
  loadUsers({ commit }) {
    let listUsers = firebase.functions().httpsCallable('listUsers');
    listUsers().then(({ data }) => {
      console.log(data);
      commit(SET_USERS, data);
    });
  },

  setRole(contex, {email, role}) {
    let setRole = firebase.functions().httpsCallable('setRole');
    setRole({email, role}).then(({ data }) => {
      console.log(data);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
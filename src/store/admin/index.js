import firebase from '../../firebase';
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
  loadUsers: function({ commit }) {
    let helloWorld = firebase.functions().httpsCallable('helloWorld');
    helloWorld({}).then(({ data }) => {
      console.log(data);
      commit(SET_USERS, data);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
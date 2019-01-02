import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import question from './question';
import admin from './admin';
import author from './author';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    question,
    admin,
    author,
  }
});

export default store;
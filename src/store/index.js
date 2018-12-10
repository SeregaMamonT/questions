import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import question from './question';
import admin from './admin';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    question,
    admin
  }
});

export default store;
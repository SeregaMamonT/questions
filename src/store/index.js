import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import question from './question';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    question,
  }
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import question from './question';
import admin from './admin';
import author from './author';
import balance from './balance';
import {SET_LOADED} from 'app/store/mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    question,
    admin,
    author,
    balance,
  },

  state: {
    isLoaded: false,
  },

  mutations: {
    [SET_LOADED](state) {
      state.isLoaded = true;
    },
  },

  actions: {
    waitUntilLoaded({ state }) {
      return new Promise(resolve => {
        if (state.isLoaded) {
          resolve();
        }
        store.watch(state => state.isLoaded, () => resolve());
      });
    },
  },
});

export default store;
import db from "app/db";
import {ADD_BALANCE} from "./mutations";
import {listenQuery} from "app/firestore-helpers";

const state = {
  list: [],
};

const getters = {
  list: state => state.list,
};

const mutations = {
  [ADD_BALANCE](state, balance) {
    state.list.push(balance);
  },
};

const actions = {
  list({commit}) {
    console.log('List balances');
    listenQuery(db.collection('balances'), {
      onAdded: balance => commit(ADD_BALANCE, balance),
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

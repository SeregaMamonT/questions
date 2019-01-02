import db from "app/db";
import {ADD_AUTHOR} from "./mutations";
import {listenQuery} from "app/firestore-helpers";

const state = {
  list: [],
};

const getters = {
  list: state => state.list,
};

const mutations = {
  [ADD_AUTHOR](state, author) {
    state.list.push(author);
  },
};

const actions = {
  list({commit}) {
    listenQuery(db.collection('authors'), {
      onAdded: author => commit(ADD_AUTHOR, author),
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

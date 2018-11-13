import db from '../../db';
import {PUSH_QUESTION, RESET_QUESTION_LIST} from './mutations';

const state = {
  list: []
};

const getters = {
  list: state => state.list
};

const mutations = {
  [PUSH_QUESTION](state, question) {
    state.list.push(question);
  },

  [RESET_QUESTION_LIST](state) {
    state.list = [];
  }
};

const actions = {
  list({commit}) {
    commit(RESET_QUESTION_LIST);

    db.collection('questions').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            commit(PUSH_QUESTION, {
              id: change.doc.id,
              ...change.doc.data(),
            });
          }
        });
      },
      error => {
        commit(RESET_QUESTION_LIST);
        // TODO: log error in debug mode
        // debug('Failed fetch for questions:', error);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
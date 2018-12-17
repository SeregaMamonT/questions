import db from 'app/db';
import {PUSH_QUESTION, RESET_QUESTION_LIST, SET_QUESTION} from './mutations';

const state = {
  list: [],
  current: null
};

const getters = {
  current: state => state.current,
  list: state => state.list
};

const mutations = {
  [PUSH_QUESTION](state, question) {
    state.list.push(question);
  },

  [RESET_QUESTION_LIST](state) {
    state.list = [];
  },

  [SET_QUESTION](state, question) {
    state.current = question;
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
  },

  readCurrent({commit}, id) {
    db.collection('questions').doc(id).get().then(question => {
      if (question.exists) {
        commit(SET_QUESTION, {
          id: question.id,
          ...question.data()
        });
      }
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
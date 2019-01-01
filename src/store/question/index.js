import db from 'app/db';
import {PUSH_QUESTION, RESET_QUESTION_LIST, SET_QUESTION} from './mutations';
import {listenQuery, readSingle} from 'app/firestore-helpers';

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

    listenQuery(db.collection('questions'), {
      onAdded(question) {
        commit(PUSH_QUESTION, question);
      },
      onError(error) {
        commit(RESET_QUESTION_LIST);
        // TODO: log error in debug mode
        // debug('Failed fetch for questions:', error);
      }
    })
  },

  readCurrent({commit}, id) {
    readSingle(db.collection('questions').doc(id)).then(question => {
      commit(SET_QUESTION, question);
    });
  },

  addQuestion({commit}, question) {
    console.log(question);
    db.collection('questions').add(question)
      .then(console.log)
      .catch(console.log);
  },

  updateQuestion({commit}, {id, question}) {
    db.collection('questions').doc(id).set(question)
      .then(console.log)
      .catch(console.log);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

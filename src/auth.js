import firebase from './firebase';
import store from './store';

import { LOGOUT } from './store/user/mutations';
import { SET_LOADED } from './store/mutations';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('user/onAuthStateChanged', user);
    store.commit(SET_LOADED);
    store.dispatch('author/list');
    store.dispatch('question/list');
    store.dispatch('balance/list');
  }
  else {
    store.commit(`user/${LOGOUT}`);
    store.commit(SET_LOADED);
  }
});
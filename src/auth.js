import firebase from './firebase';
import store from './store';

import { SET_PROFILE, LOGOUT } from './store/user/mutations';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.commit(`user/${SET_PROFILE}`, user);
    store.dispatch('question/list');
  } else {
    store.commit(`user/${LOGOUT}`);
  }
});
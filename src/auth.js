import firebase from './firebase';
import store from './store';

import { LOGOUT } from './store/user/mutations';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('user/onAuthStateChanged', user);
    store.dispatch('author/list');
    store.dispatch('question/list');
  } else {
    store.commit(`user/${LOGOUT}`);
  }
});
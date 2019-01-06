import firebase from './firebase';
import store from './store';
import router from './router';

import { LOGOUT } from './store/user/mutations';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('user/onAuthStateChanged', user);
    router.push('/');
    store.dispatch('author/list');
    store.dispatch('question/list');
  }
  else {
    store.commit(`user/${LOGOUT}`);
  }
});
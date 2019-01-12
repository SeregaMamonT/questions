import Vue from 'vue';
import VueRouter from 'vue-router'
import store from 'app/store';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (isLogout(to)) {
    store.dispatch('user/logout').then(() => next('/login'));
  }
  else if (requiresAuth(to)) {
    store.dispatch('waitUntilLoaded').then(() => {
      isLoggedIn() ? next() : next('/login');
    });
  }
  else {
    next();
  }
});

function isLogout(route) {
  return route.path.startsWith('/logout');
}

function requiresAuth(route) {
  return !route.path.startsWith('/login') && !route.path.startsWith('/register');
}

function isLoggedIn() {
  return store.getters['user/loggedIn'];
}

export default router;
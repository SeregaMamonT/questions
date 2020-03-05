import Vue from 'vue';
import VueRouter from 'vue-router'
import store from 'app/store';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  if (isLogout(to)) {
    await store.dispatch('user/logout');
    next('/login');
  }
  else if (requiresAuth(to)) {
    await store.dispatch('waitUntilLoaded');
    isLoggedIn() ? next() : next('/login');
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
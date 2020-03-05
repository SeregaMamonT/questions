import Vue from 'vue';

import vuetify from './vuetify';
import store from './store';
import router from './router';
import i18n from './i18n';
import './auth';

import AppComponent from './app-component';

new Vue({
  el: '#vue-app',
  render: h => h(AppComponent),
  store,
  router,
  i18n,
  vuetify,
});

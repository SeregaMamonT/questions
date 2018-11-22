import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import store from './store';
import router from './router';
import i18n from './i18n';
import './auth';

import AppComponent from './components/app-component.vue';

Vue.use(Vuetify);

new Vue({
  el: '#vue-app',
  render: h => h(AppComponent),
  store,
  router,
  i18n,
});

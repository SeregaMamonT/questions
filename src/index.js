import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';

import store from './store';
import router from './router';
import './auth';

import translations from './translations.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  messages: translations,
});

new Vue({
  el: '#vue-app',
  store,
  router,
  i18n,
});

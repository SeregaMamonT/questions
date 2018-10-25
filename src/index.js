import Vue from 'vue';
import VueFire from 'vuefire';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router'

import routes from './routes.js';
import translations from './translations.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueFire);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueI18n);

const router = new VueRouter({
  routes
});

const i18n = new VueI18n({
  locale: 'ru',
  messages: translations,
});

new Vue({
  el: '#vue-app',

  router,

  i18n,
});

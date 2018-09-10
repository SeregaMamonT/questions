import Vue from 'vue';
import VueFire from 'vuefire';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';

import AppComponent from './components/app-component.vue';
import translations from './translations.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueFire);
Vue.use(Vuetify);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  messages: translations,
});

new Vue({
  el: '#vue-app',

  components: {
    'app-component': AppComponent,
  },

  i18n,
});
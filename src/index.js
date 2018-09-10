import Vue from 'vue';
import VueFire from 'vuefire';
import Vuetify from 'vuetify';

import AppComponent from './components/app-component.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueFire);
Vue.use(Vuetify);

new Vue({
  el: '#vue-app',

  components: {
    'app-component': AppComponent
  },
});
import Vue from 'vue';
import VueFire from 'vuefire';

import AppComponent from './components/app-component.vue';

Vue.use(VueFire);

new Vue({
  el: '#vue-app',

  components: {
    'app-component': AppComponent
  },
});
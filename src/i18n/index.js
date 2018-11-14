import Vue from 'vue';
import VueI18n from 'vue-i18n';

import translations from './translations.js';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  messages: translations,
});

export default i18n;
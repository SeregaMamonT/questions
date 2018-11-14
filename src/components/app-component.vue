<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu></login-menu>
    </v-toolbar>
    <v-content>
      <main-page></main-page>
    </v-content>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import LoginMenu from './login-menu.vue';
  import MainPage from './main-page.vue';

  export default {
    components: {
      'login-menu': LoginMenu,
      'main-page': MainPage
    },
  };
</script>

<style>
</style>
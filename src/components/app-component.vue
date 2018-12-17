<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu></login-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import LoginMenu from './login-menu.vue';

  export default {
    components: {
      'login-menu': LoginMenu,
    },
  };
</script>

<style>
</style>
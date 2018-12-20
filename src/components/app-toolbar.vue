<template>
  <v-toolbar app>
    <router-link to="/" class="toolbar-title">
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/change-password">{{$t('Change_password')}}</router-link>
    <login-menu></login-menu>
  </v-toolbar>
</template>

<script>
  import LoginMenu from './login-menu';

  export default {
    name: 'app-toolbar',

    components: {
      'login-menu': LoginMenu,
    },
  };
</script>

<style scoped>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }

  a {
    margin: 0 0.4rem;
  }
</style>
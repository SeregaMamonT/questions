<template>
  <v-toolbar app>
    <router-link to="/" class="toolbar-title">
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link v-if="isAdmin" to="/admin">{{$t('Admin')}}</router-link>
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

    computed: {
      isAdmin() {
        return this.$store.state.user.isAdmin;
      },
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
<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="onIconClick"></v-toolbar-side-icon>
    <router-link to="/" class="toolbar-title">
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <login-menu></login-menu>
  </v-toolbar>
</template>

<script>
  import {mapGetters} from 'vuex';
  import LoginMenu from './login-menu';

  export default {
    name: 'app-toolbar',

    components: {
      'login-menu': LoginMenu,
    },

    props: {
      onIconClick: { type: Function },
    },

    computed: {
      ...mapGetters('user', {
        isAdmin: 'isAdmin',
        isLoggedIn: 'loggedIn',
      }),
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
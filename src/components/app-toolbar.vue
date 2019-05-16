<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="onIconClick" />
    <router-link to="/" class="toolbar-title">
      <v-toolbar-title>{{ $t('Questions') }}</v-toolbar-title>
    </router-link>
    <v-spacer />
    <login-menu />
  </v-toolbar>
</template>

<script>
  import {mapGetters} from 'vuex';
  import LoginMenu from './login-menu';

  export default {
    name: 'AppToolbar',

    components: {
      'login-menu': LoginMenu,
    },

    props: {
      onIconClick: {
        type: Function,
        required: true,
      },
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
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu
          :signIn="(email, password) => login({email, password})"
          :signOut="logout"
          :isAuthenticated="loggedIn"
      ></login-menu>
    </v-toolbar>
    <v-content>
      <main-page
          :isAuthenticated="loggedIn"
          :questions="questions"
      ></main-page>
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

    data() {
      return {
      };
    },

    computed: {
      ...mapGetters('user', {
        loggedIn: 'loggedIn'
      }),

      ...mapGetters('question', {
        questions: 'list'
      })
    },

    methods: {
      ...mapActions('user', {
        login: 'login',
        logout: 'logout'
      }),

      ...mapActions('question', {
        findQuestions: 'list'
      })
    }
  };
</script>

<style>
</style>
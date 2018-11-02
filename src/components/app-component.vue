<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu
          :signIn="signIn"
          :signOut="signOut"
          :isAuthenticated="isAuthenticated"
      ></login-menu>
    </v-toolbar>
    <v-content>
      <main-page
          :isAuthenticated="isAuthenticated"
          :questions="questions"
      ></main-page>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  import LoginMenu from './login-menu.vue';
  import MainPage from './main-page.vue';

  let firebaseApp = firebase.initializeApp({
    authDomain: "messaging-mamo.firebaseapp.com",
    databaseURL: 'https://messaging-mamo.firebaseio.com',
    projectId: 'messaging-mamo',
    apiKey: "AIzaSyAz-vQfU3Pub_lJg4O9zcvKUcGiLzF2MqY",
  });

  const firestore = firebaseApp.firestore();
  firestore.settings({ timestampsInSnapshots: true });

  export default {
    components: {
      'login-menu': LoginMenu,
      'main-page': MainPage
    },

    data() {
      return {
        questions: [],
        isAuthenticated: false,
      };
    },

    created() {
      firebase.app().auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
        }
        this.isAuthenticated = !!user;
      });
    },

    firestore() {
      return {
        questions: firestore.collection('questions')
      };
    },

    methods: {
      signIn(email, password) {
        firebase.app().auth().signInWithEmailAndPassword(email, password)
            .then(res => {
              console.log(res);
              this.reloadPage();
            })
            .catch(console.log);
      },

      signOut() {
        firebase.app().auth().signOut()
            .then(res => {
              console.log(res);
              this.reloadPage();
            })
            .catch(console.log);
      },

      reloadPage() {
        this.$router.go(0);
      }
    }
  };
</script>

<style>
</style>
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu></login-menu>
    </v-toolbar>
    <v-content>
      <main-page :questions="questions"></main-page>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';

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
      };
    },

    firestore() {
      return {
        questions: firestore.collection('questions')
      };
    },
  };
</script>

<style>
</style>
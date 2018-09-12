<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-menu></login-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid class="root">
        <add-question-form/>
        <question-list :questions="questions" />
        <div id="firebaseui-auth-container"></div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/firestore';

  import QuestionList from './question-list.vue';
  import AddQuestionForm from './add-question-form.vue';
  import LoginMenu from './login-menu.vue';

  let firebaseApp = firebase.initializeApp({
    authDomain: "messaging-mamo.firebaseapp.com",
    databaseURL: 'https://messaging-mamo.firebaseio.com',
    projectId: 'messaging-mamo',
    apiKey: "AIzaSyAz-vQfU3Pub_lJg4O9zcvKUcGiLzF2MqY",
  });

  const firestore = firebaseApp.firestore();
  firestore.settings({ timestampsInSnapshots: true });

  export default Vue.extend({
    components: {
      'question-list': QuestionList,
      'add-question-form': AddQuestionForm,
      'login-menu': LoginMenu,
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
  });
</script>

<style>
</style>
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$t('questions')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field
                v-model="email"
        ></v-text-field>
        <v-text-field
                v-model="password"
                type="password"
        ></v-text-field>
        <button @click="signIn">Sign in</button>
        <button @click="signOut">Sign out</button>
      </v-toolbar-items>
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
  import 'firebase/auth';

  import QuestionList from './question-list.vue';
  import AddQuestionForm from './add-question-form.vue';

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
      'add-question-form': AddQuestionForm
    },

    created() {
      firebaseApp.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user);
        }
      });
    },

    data() {
      return {
        questions: [],
        email: '',
        password: '',
      };
    },

    firestore() {
      return {
        questions: firestore.collection('questions')
      };
    },

    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((res) => console.log(res))
          .catch(console.log);
      },

      signOut() {
        firebaseApp.auth().signOut().then();
      }
    }
  });
</script>

<style>
</style>
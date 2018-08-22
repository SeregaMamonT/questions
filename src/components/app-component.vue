<template>
  <div>
    <p>Hello Wooodpecker!</p>
    <question-list :questions="questions"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import QuestionList from './question-list.vue';

  let firebaseApp = firebase.initializeApp({
    databaseURL: 'https://messaging-mamo.firebaseio.com',
    projectId: 'messaging-mamo',
  });

  const firestore = firebaseApp.firestore();
  firestore.settings({ timestampsInSnapshots: true });

  export default Vue.extend({
    components: {
      'question-list': QuestionList,
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
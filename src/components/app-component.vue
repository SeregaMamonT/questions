<template>
  <div>
    <p>Hello Wooodpecker!</p>
    <question
        v-for="(question, index) in questions"
        :key="index + 1"
        :index="index + 1"
        :data="question"
    />
  </div>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import Question from './question.vue';

  let firebaseApp = firebase.initializeApp({
    databaseURL: 'https://messaging-mamo.firebaseio.com',
    projectId: 'messaging-mamo',
  });

  const firestore = firebaseApp.firestore();
  firestore.settings({ timestampsInSnapshots: true });

  export default Vue.extend({
    components: {
      'question': Question,
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
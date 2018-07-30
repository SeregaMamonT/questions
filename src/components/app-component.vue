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
  import 'firebase/database';
  import Question from './question.vue';

  export default Vue.extend({
    components: {
      'question': Question,
    },

    data() {
      return {
        questions: [],
      };
    },

    created() {
      firebase.initializeApp({
        databaseURL: 'https://messaging-mamo.firebaseio.com',
        projectId: 'messaging-mamo',
      });

      try {
        firebase.database().ref('/questions').on('value', this.onQuestionsLoaded);
      } catch (e) {
        console.error(e);
      }
    },

    methods: {
      onQuestionsLoaded(snapshot) {
        let message = snapshot.val();
        console.log(message);
        this.questions = Object.values(message);
      },
    },
  });
</script>
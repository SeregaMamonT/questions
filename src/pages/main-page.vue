<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <add-question-form v-if="isAuthenticated"/>
      <question-list :questions="questions"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex';

  import QuestionList from '../components/question-list';
  import AddQuestionForm from '../components/add-question-form';

  export default {
    name: 'main-page',

    components: {
      'question-list': QuestionList,
      'add-question-form': AddQuestionForm,
    },

    computed: {
      ...mapGetters('user', {
        isAuthenticated: 'loggedIn',
      }),

      ...mapGetters('question', {
        questions: 'list',
      }),
    },
  };
</script>

<style scoped>

</style>
<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md10 lg6>
        <add-question-form v-if="isAuthenticated"/>
        <question-list :questions="questions"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';

  import QuestionList from './question-list.vue';
  import AddQuestionForm from './add-question-form.vue';

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
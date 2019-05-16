<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <question-list :questions="questions" />
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex';

  import QuestionList from './question-list';

  export default {
    name: 'MainPage',

    components: {
      'question-list': QuestionList,
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
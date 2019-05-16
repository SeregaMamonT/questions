<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <edit-question-form
          v-model="question"
          :all-authors="authors"
          :on-save="onSave"
      ></edit-question-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import EditQuestionForm from './edit-question-form';
  import {mapGetters} from 'vuex';
  import questionService from 'app/services/questionService';

  export default {
    name: 'edit-question',

    components: {
      'edit-question-form': EditQuestionForm,
    },

    data() {
      return {
        question: {
          razdatka: null,
          text: null,
          answer: null,
          authors: [],
        },
        questionId: null,
      };
    },

    created() {
      this.questionId = this.$route.params.id;
      this.questionId && questionService.readCurrent(this.questionId);
    },

    computed: {
      ...mapGetters('question', {
        currentQuestion: 'current',
      }),
      ...mapGetters('author', {
        authors: 'list',
      }),
    },

    methods: {
      onSave(question) {
        const actionPromise = this.questionId ?
          questionService.update(this.questionId, question) :
          questionService.add(question);
        actionPromise.then(() => this.$router.push({ path: '/' }));
      },
    },

    watch: {
      currentQuestion(value) {
        value && Object.assign(this.question, value);
      },
    },
  };
</script>

<style scoped>

</style>
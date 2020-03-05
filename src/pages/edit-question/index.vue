<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <edit-question-form
        v-model="question"
        :all-authors="authors"
        :on-save="onSave"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import EditQuestionForm from './edit-question-form';
  import {mapGetters} from 'vuex';
  import questionService from 'app/services/questionService';

  export default {
    name: 'EditQuestion',

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

    computed: {
      ...mapGetters('question', {
        currentQuestion: 'current',
      }),
      ...mapGetters('author', {
        authors: 'list',
      }),
    },

    watch: {
      currentQuestion(value) {
        value && Object.assign(this.question, value);
      },
    },

    created() {
      this.questionId = this.$route.params.id;
      this.questionId && questionService.readCurrent(this.questionId);
    },

    methods: {
      onSave(question) {
        const actionPromise = this.questionId ?
          questionService.update(this.questionId, question) :
          questionService.add(question);
        actionPromise.then(() => this.$router.push({ path: '/' }));
      },
    },
  };
</script>

<style scoped>

</style>
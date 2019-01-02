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
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "edit-question",

    components: {
      'edit-question-form': EditQuestionForm,
    },

    data() {
      return {
        question: {
          text: null,
          answer: null,
          authors: [],
        },
        questionId: null,
      };
    },

    created() {
      this.questionId = this.$route.params.id;
      this.questionId && this.readCurrent(this.questionId);
    },

    methods: {
      ...mapActions('question', {
        readCurrent: 'readCurrent',
        addQuestion: 'addQuestion',
        updateQuestion: 'updateQuestion',
      }),

      onSave(question) {
        this.questionId ?
          this.updateQuestion({id: this.questionId, question}) :
          this.addQuestion(question);
      },
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
  };
</script>

<style scoped>

</style>
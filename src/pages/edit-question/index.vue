<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <edit-question-form
          v-model="question"
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
      }),
    },

    computed: {
      ...mapGetters('question', {
        currentQuestion: 'current',
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
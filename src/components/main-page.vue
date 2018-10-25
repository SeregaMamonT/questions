<template>
  <v-container fluid>
    <add-question-form/>
    <question-list :questions="questions" />
  </v-container>
</template>

<script>
  import QuestionList from './question-list.vue';
  import AddQuestionForm from './add-question-form.vue';

  export default {
    name: 'main-page',

    components: {
      'question-list': QuestionList,
      'add-question-form': AddQuestionForm,
    },

    props: ['questions']
  };
</script>

<style scoped>

</style>
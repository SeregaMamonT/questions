<template>
  <div class="question-list">
    <question
      v-for="(question, index) in questions"
      :key="index + 1"
      :index="index + 1"
      :data="question"
    />
  </div>
</template>

<script>
  import Question from 'app/components/question';

  export default {
    components: {
      'question': Question,
    },

    props: {
      questions: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style scoped>
  .question-list {
    margin: -12px;
    border-width: 0 0.08em;
    border-style: dotted;
    border-color: skyblue;
  }
</style>
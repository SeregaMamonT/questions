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
  import Question from './question';

  export default {
    components: {
      'question': Question,
    },

    props: ['questions']
  };
</script>

<style>
</style>
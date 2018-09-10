<template>
  <div class="question-root">
    <div class="question-index">#{{index}}</div>
    <div class="question">
      <div>{{data.text}}</div>
      <div>Answer: {{data.answer}}</div>
      <div>Author(s): {{data.author}}</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: ['data', 'index'],
  });
</script>

<style scoped>
  .question-root:hover {
    border: 1px dashed forestgreen;
    border-radius: 5px;
  }

  .question-index {
    width: 50px;
    display: inline-block;
  }

  .question {
    display: inline-block;
  }
</style>
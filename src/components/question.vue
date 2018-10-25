<template>
  <div class="question-root">
    <div class="question-index">#{{index}}</div>
    <div class="question">
      <div>{{data.text}}</div>
      <div>{{$t('answer')}}: {{data.answer}}</div>
      <div>{{$t('author_s')}}: {{data.author}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data', 'index'],
  };
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
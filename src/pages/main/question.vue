<template>
  <div class="question-root">
    <div class="question">
      <p>
        <strong>
          <a :href="questionUrl" class="question-index">{{`${$t('Question')} ${index}:`}}</a>
        </strong>
        {{data.text}}
      </p>
      <div>{{$t('answer')}}: {{data.answer}}</div>
      <v-chip
          v-for="(author, index) in data.authors"
          :key="index"
          color="primary"
          text-color="white"
      >{{author}}
      </v-chip>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: { type: Object, isRequired: true },
      index: { type: Number, isRequired: true },
    },

    computed: {
      questionUrl() {
        return `/#/question/${this.data.id}`;
      },
    },
  };
</script>

<style scoped>
  .question-root {
    padding: 0.4em;
    border: 0.15em dashed transparent;
    border-radius: 1em;
  }

  .question-root:hover {
    border-color: dodgerblue;
  }

  .question-index:hover(:not) {
    text-decoration: none;
  }

  .question {
    display: inline-block;
  }
</style>
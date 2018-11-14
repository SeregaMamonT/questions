<template>
  <div v-if="question">
    <p>{{question.id}}</p>
    <p>{{question.text}}</p>
    <p>{{question.answer}}</p>
    <p>{{question.author}}</p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'question-page',

    created() {
      this.readCurrent(this.$route.params.id);
    },

    computed: {
      ...mapGetters('question', {
        question: 'current'
      }),
    },

    methods: {
      ...mapActions('question', {
        readCurrent: 'readCurrent',
      }),
    }
  };
</script>

<style scoped>

</style>
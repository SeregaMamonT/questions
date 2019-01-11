<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <question v-if="question" :data="question"></question>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Question from 'app/components/question';

  export default {
    name: 'question-page',

    components: {
      'question': Question,
    },

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
<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <question v-if="question" :data="question" />
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Question from 'app/components/question';

  export default {
    name: 'QuestionPage',

    components: {
      'question': Question,
    },

    computed: {
      ...mapGetters('question', {
        question: 'current'
      }),
    },

    created() {
      this.readCurrent(this.$route.params.id);
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
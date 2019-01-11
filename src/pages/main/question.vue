<template>
  <div
      class="question-root"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <a v-if="isHovered" :href="editUrl" class="edit-link">{{$t('Edit')}}</a>
    <p>
      <strong>
        <a :href="questionUrl" class="question-index">{{`${$t('Question')} ${index}:`}}</a>
      </strong>
      {{data.text}}
    </p>
    <span @click="isAnswerVisible = !isAnswerVisible">...</span>
    <div v-if="isAnswerVisible">
      <div>{{$t('Answer')}}: {{data.answer}}</div>
      <div>{{$t('Commentary')}}: {{data.commentary}}</div>
      <div>{{$t('References')}}: {{data.references}}</div>
      <v-chip
          v-for="(authorId, index) in data.authors"
          :key="index"
          color="primary"
          outline
      >{{authorById(authorId).name}}
      </v-chip>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {
      data: { type: Object, isRequired: true },
      index: { type: Number, isRequired: true },
    },

    data() {
      return {
        isHovered: false,
        isAnswerVisible: false,
      };
    },

    computed: {
      ...mapGetters('author', {
        authorById: 'authorById',
      }),

      questionUrl() {
        return `/#/question/${this.data.id}`;
      },

      editUrl() {
        return `/#/edit-question/${this.data.id}`;
      },
    },
  };
</script>

<style scoped>
  .question-root {
    padding: 0.4em;
    border: 0.15em dashed transparent;
    border-radius: 1em;
    position: relative;
  }

  .question-root:hover {
    border-color: dodgerblue;
  }

  .question-index:not(:hover) {
    text-decoration: none;
  }

  .edit-link {
    position: absolute;
    bottom: 0.7em;
    right: 1.2em;
    text-decoration: none;
  }
</style>
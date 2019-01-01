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
    <div>{{$t('answer')}}: {{data.answer}}</div>
    <v-chip
        v-for="(author, index) in data.authors"
        :key="index"
        color="primary"
        text-color="white"
    >{{author}}
    </v-chip>
  </div>
</template>

<script>
  export default {
    props: {
      data: {type: Object, isRequired: true},
      index: {type: Number, isRequired: true},
    },

    data() {
      return {
        isHovered: false,
      };
    },

    computed: {
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

  .question-index:hover(:not) {
    text-decoration: none;
  }

  .edit-link {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
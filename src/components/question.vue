<template>
  <div
      class="root"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <a v-if="isHovered" :href="editUrl" class="edit-link">{{$t('Edit')}}</a>

    <div v-if="data.razdatka">
      <p>
        <strong>
          <a :href="questionUrl" class="question-index">
            {{ questionNumber }}
          </a>
        </strong>
      </p>
      <img v-if="data.razdatka.mode === 'image'" class="razdatka-image" :src="imageSrc" />
      <p v-if="data.razdatka.mode === 'text'" class="razdatka-text">{{data.razdatka.text}}</p>
      <p>{{data.text}}</p>
    </div>

    <p v-if="!data.razdatka">
      <strong>
        <a :href="questionUrl" class="question-index">
          {{ questionNumber }}
        </a>
      </strong>
      {{data.text}}
    </p>

    <a @click="isAnswerVisible = !isAnswerVisible">{{ isAnswerVisible ? $t('Hide_answer') : $t('Show_answer') }}</a>
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
  import fileService from 'app/services/fileService';

  export default {
    props: {
      data: { type: Object, isRequired: true },
      index: { type: Number },
    },

    data() {
      return {
        isHovered: false,
        isAnswerVisible: false,
        imageSrc: null,
      };
    },

    computed: {
      ...mapGetters('author', {
        authorById: 'authorById',
      }),

      questionNumber() {
        const questionStr = this.$t('Question');
        return this.index ? `${questionStr} ${this.index}:` : `${questionStr}:`;
      },

      questionUrl() {
        return `/#/question/${this.data.id}`;
      },

      editUrl() {
        return `/#/edit-question/${this.data.id}`;
      },
    },

    watch: {
      'data.razdatka.imageSrc': {
        immediate: true,
        handler(newVal) {
          fileService.getDownloadUrl(newVal)
            .then(imageSrc => this.imageSrc = imageSrc);
        },
      },
    },
  };
</script>

<style scoped>
  .root {
    padding: 0.4em;
    border: 0.15em dashed transparent;
    border-radius: 1em;
    position: relative;
  }

  .root:hover {
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

  .razdatka-image {
    max-width: 100%;
  }

  .razdatka-text {
    border: 1px solid black;
    background: lightgray;
    overflow-wrap: break-word;
  }
</style>
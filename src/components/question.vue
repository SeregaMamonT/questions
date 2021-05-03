<template>
  <div
    class="root"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <a v-if="isHovered" :href="editUrl" class="edit-link">{{ $t('Edit') }}</a>

    <div v-if="data.razdatka">
      <p>
        <strong>
          <a :href="questionUrl" class="question-index">
            {{ questionNumber }}
          </a>
        </strong>
      </p>
      <img v-if="data.razdatka.mode === 'image'" class="razdatka-image" :src="imageSrc">
      <p v-if="data.razdatka.mode === 'text'" class="razdatka-text">
        {{ data.razdatka.text }}
      </p>
      <p>{{ data.text }}</p>
    </div>

    <p v-if="!data.razdatka">
      <strong>
        <a :href="questionUrl" class="question-index">
          {{ questionNumber }}
        </a>
      </strong>
      {{ data.text }}
    </p>

    <a @click="toggleAnswerVisible">{{ isAnswerVisible ? $t('Hide_answer') : $t('Show_answer') }}</a>
    <div v-if="isAnswerVisible">
      <div>{{ $t('Answer') }}: {{ data.answer }}</div>
      <div>{{ $t('Commentary') }}: {{ data.commentary }}</div>
      <div>{{ $t('References') }}: {{ data.references }}</div>
      <v-chip
        v-for="(authorId, i) in data.authors"
        :key="i"
        color="primary"
        outlined
      >
        {{ authorById(authorId).name }}
      </v-chip>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import fileService from 'app/services/fileService';

  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        default: null,
      },
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

    methods: {
      toggleAnswerVisible() {
        this.isAnswerVisible = !this.isAnswerVisible;
      },
    },
  };
</script>

<style scoped>
  .root {
    padding: 0.5em 0.6em 0.4em 0.6em;
    border-bottom: 0.08em dotted skyblue;
    position: relative;
  }

  .root:hover {
    background: rgba(0, 0, 0, 0.02);
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
<template>
  <v-form>
    <v-textarea
        v-model="value.text"
        :label="$t('question_text')"
    ></v-textarea>
    <v-text-field
        v-model="value.answer"
        :label="$t('answer')"
    ></v-text-field>
    <v-combobox
        v-model="value.authors"
        :items="allAuthors"
        :label="$t('author_s')"
        multiple
        chips
    ></v-combobox>
  </v-form>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
      }
    },

    data() {
      return {
        allAuthors: [],
      };
    },
  };
</script>
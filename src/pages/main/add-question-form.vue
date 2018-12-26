<template>
  <v-form>
    <v-textarea :label="$t('question_text')"></v-textarea>
    <v-text-field :label="$t('answer')"></v-text-field>
    <v-combobox
        v-model="authors"
        :items="allAuthors"
        :label="$t('author_s')"
        multiple
        chips
    ></v-combobox>
  </v-form>
</template>

<script>
  export default {
    data() {
      return {
        authors: [],
        allAuthors: [],
      };
    },
  };

</script>
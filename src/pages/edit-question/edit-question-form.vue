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
    <v-select
        v-model="value.authors"
        item-text="name"
        item-value="id"
        :items="allAuthors"
        :label="$t('author_s')"
        multiple
        chips
    ></v-select>
    <v-btn @click="onSave(value)">{{$t('Save')}}</v-btn>
  </v-form>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
      },
      allAuthors: {
        type: Array,
        required: true,
      },
      onSave: {
        type: Function,
        required: true,
      },
    },
  };
</script>
<template>
  <v-form>
    <v-textarea
        v-model="value.text"
        :label="$t('Question_text')"
    ></v-textarea>
    <v-text-field
        v-model="value.answer"
        :label="$t('Answer')"
    ></v-text-field>
    <v-textarea
        v-model="value.commentary"
        :label="$t('Commentary')"
    ></v-textarea>
    <v-textarea
        v-model="value.references"
        :label="$t('References')"
    ></v-textarea>
    <v-select
        v-model="value.authors"
        item-text="name"
        item-value="id"
        :items="allAuthors"
        :label="$t('Author_s')"
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
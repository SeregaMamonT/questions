<template>
  <v-form>
    <v-textarea
        :placeholder="$t('question_text')"
    ></v-textarea>
    <v-text-field
        :placeholder="$t('answer')"
    ></v-text-field>
  </v-form>
</template>

<script>
  export default {
  };

</script>
<template>
  <v-list-tile :to="to">
    <v-list-tile-action>
      <v-icon>{{icon}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{text}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: "url-list-tile",

    props: {
      to: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
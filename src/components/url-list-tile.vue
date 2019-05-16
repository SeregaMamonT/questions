<template>
  <v-list-tile :to="toInner" @click="onClickInner">
    <v-list-tile-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ text }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'UrlListTile',

    props: {
      to: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      onClick: {
        type: Function,
        default: () => {},
      },
    },

    computed: {
      toInner() {
        return this.to;
      },

      onClickInner() {
        return this.onClick || (() => {});
      },
    },
  }
</script>

<style scoped>

</style>
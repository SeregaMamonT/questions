<template>
  <v-list-item :to="toInner" @click="onClickInner">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ text }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
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
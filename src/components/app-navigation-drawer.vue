<template>
  <v-navigation-drawer
      fixed
      :value="value"
      left
      app
  >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'app-navigation-drawer',

    props: {
      value: Boolean,
    },

    data() {
      return {
        modelValue: this.value,
      };
    },

    watch: {
      modelValue(val) {
        this.$emit('input', val);
      },
    },
  };
</script>

<style scoped>

</style>
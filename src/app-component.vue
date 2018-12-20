<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppToolbar from './components/app-toolbar';

  export default {
    components: {
      'app-toolbar': AppToolbar,
    },
  };
</script>

<style>
</style>
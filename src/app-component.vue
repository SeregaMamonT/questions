<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
        <v-card-text class="add-question-button">
          <v-btn
              absolute
              dark
              fab
              top
              right
              color="primary"
              to="/add-question"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-text>

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
  .add-question-button {
    padding: 0;
    position: fixed;
    right: 0;
    bottom: 40px;
  }
</style>
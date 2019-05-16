<template>
  <v-app>
    <app-navigation-drawer v-model="drawer" />
    <app-toolbar :on-icon-click="switchDrawer" />
    <v-content>
      <v-container fluid>
        <router-view />
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
  import AppNavigationDrawer from './components/app-navigation-drawer';

  export default {
    components: {
      'app-toolbar': AppToolbar,
      'app-navigation-drawer': AppNavigationDrawer,
    },

    data() {
      return {
        drawer: null,
      };
    },

    methods: {
      switchDrawer() {
        this.drawer = !this.drawer;
      },
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
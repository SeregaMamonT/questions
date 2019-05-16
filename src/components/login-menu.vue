<template>
  <v-toolbar-items>
    <v-btn v-if="isAuthenticated" flat>
      {{ profile.email }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters('user', {
        isAuthenticated: 'loggedIn',
        profile: 'profile',
      }),
    },
  };
</script>

<style scoped>

</style>
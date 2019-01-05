<template>
  <v-navigation-drawer
      fixed
      v-model="modelValue"
      left
      app
  >
    <v-list dense>
      <url-list-tile
          v-if="isAdmin"
          to="/"
          :text="$t('Home')"
          icon="home"
      ></url-list-tile>
      <url-list-tile
          v-if="isAdmin"
          to="/admin"
          :text="$t('Admin')"
          icon="verified_user"
      ></url-list-tile>
      <url-list-tile
          v-if="isLoggedIn"
          to="/change-password"
          :text="$t('Change_password')"
          icon="update"
      ></url-list-tile>
      <url-list-tile
          v-if="isLoggedIn"
          :on-click="signOut"
          :text="$t('Sign_out')"
          icon="exit_to_app"
      ></url-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import UrlListTile from './url-list-tile';

  export default {
    name: 'app-navigation-drawer',

    components: {
      'url-list-tile': UrlListTile,
    },

    props: {
      value: Boolean,
    },

    data() {
      return {
        modelValue: this.value,
      };
    },

    computed: {
      ...mapGetters('user', {
        isAdmin: 'isAdmin',
        isLoggedIn: 'loggedIn',
      }),
    },

    watch: {
      value(val) {
        this.modelValue = val;
      },

      modelValue(val) {
        this.$emit('input', val);
      },
    },

    methods: {
      ...mapActions('user', {
        signOut: 'logout',
      }),
    },
  };
</script>

<style scoped>

</style>
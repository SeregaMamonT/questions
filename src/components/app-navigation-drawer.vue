<template>
  <v-navigation-drawer
    v-model="modelValue"
    fixed
    left
    app
  >
    <v-list dense>
      <url-list-tile
        v-if="isLoggedIn"
        to="/"
        :text="$t('Home')"
        icon="home"
      />
      <url-list-tile
        v-if="isAdmin"
        to="/admin"
        :text="$t('Admin')"
        icon="verified_user"
      />
      <url-list-tile
        v-if="isLoggedIn"
        to="/change-password"
        :text="$t('Change_password')"
        icon="update"
      />
      <url-list-tile
        v-if="isLoggedIn"
        :on-click="onCreateDump"
        :text="$t('Backup')"
        icon="backup"
      />
      <url-list-tile
        v-if="isLoggedIn"
        to="/logout"
        :text="$t('Sign_out')"
        icon="exit_to_app"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import UrlListTile from './url-list-tile';
  import dumpService from 'app/services/dumpService';

  export default {
    name: 'AppNavigationDrawer',

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

      onCreateDump() {
        dumpService.createDump();
      },
    },
  };
</script>

<style scoped>

</style>
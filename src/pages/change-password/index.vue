<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm9 md6 lg3>
      <v-text-field
          v-model="oldPassword"
          :type="showOldPassword ? 'text' : 'password'"
          :label="$t('Input_new_password')"
          :append-icon="showOldPassword ? 'visibility_off' : 'visibility'"
          v-on:click:append="showOldPassword = !showOldPassword"
      ></v-text-field>
      <v-text-field
          v-model="newPassword"
          :type="showPassword ? 'text' : 'password'"
          :label="$t('Input_new_password')"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          v-on:click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-btn @click="onChangePassword">{{$t('Change_password')}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'change-password',

    data() {
      return {
        oldPassword: null,
        newPassword: null,
        showPassword: false,
        showOldPassword: false,
      };
    },

    methods: {
      ...mapActions('user', {
        changePassword: 'changePassword',
      }),

      onChangePassword() {
        this.changePassword({
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        });
      },
    },
  };
</script>

<style scoped>

</style>
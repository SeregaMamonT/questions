<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm9 md6 lg3>
      <password-field
        v-model="oldPassword"
        label="Input_old_password"
      />
      <password-field
        v-model="newPassword"
        label="Input_new_password"
      />
      <v-btn @click="onChangePassword">
        {{ $t('Change_password') }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions} from 'vuex';
  import PasswordField from './password-field';

  export default {
    name: 'ChangePassword',

    components: {
      'password-field': PasswordField,
    },

    data() {
      return {
        oldPassword: null,
        newPassword: null,
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
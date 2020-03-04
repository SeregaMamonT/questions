<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm9 md6 lg3>
      <v-text-field
        v-model="email"
        label="Email"
        autocomplete="email"
        required
      />
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        required
      />
      <v-btn @click="signInAndForward()">
        {{ $t('Sign_in') }}
      </v-btn>
      <router-link to="/register">
        {{ $t('Register') }}
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'LoginPage',

    data() {
      return {
        email: null,
        password: null,
      };
    },

    methods: {
      ...mapActions('user', {
        signIn: 'login',
      }),

      signInAndForward() {
        this.doAction().then(() => this.$router.push('/'));
      },

      doAction() {
        return this.signIn({
          email: this.email,
          password: this.password
        });
      },
    },
  }
</script>

<style scoped>

</style>
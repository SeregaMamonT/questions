<template>
    <v-toolbar-items>
        <v-menu
                menu="false"
                :close-on-content-click="false"

        >
            <v-btn
                    slot="activator"
                    flat
            >
                Login
            </v-btn>
            <v-container>
                <v-text-field
                        v-model="email"
                ></v-text-field>
                <v-text-field
                        v-model="password"
                        type="password"
                ></v-text-field>
                <button @click="signIn">Sign in</button>
                <button @click="signOut">Sign out</button>
            </v-container>
        </v-menu>
    </v-toolbar-items>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/auth';

  export default Vue.extend({
    data() {
      return {
        email: '',
        password: '',
      };
    },

    created() {
      firebase.app().auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
        }
      });
    },

    methods: {
      signIn() {
        firebase.app().auth().signInWithEmailAndPassword(this.email, this.password)
            .then((res) => console.log(res))
            .catch(console.log);
      },

      signOut() {
        firebase.app().auth().signOut().then();
      }
    }
  });
</script>

<style scoped>

</style>
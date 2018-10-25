<template>
    <v-toolbar-items>
        <v-btn v-if="isAuthenticated" flat
               @click="signOut"
        >
            {{$t('Sign_out')}}
        </v-btn>

        <v-menu v-if="!isAuthenticated"
                menu="false"
                :close-on-content-click="false"
        >
            <v-btn slot="activator" flat>
                {{$t('Sign_in')}}
            </v-btn>
            <v-card xs2>
                <v-form>
                    <v-list>
                        <v-list-tile>
                            <v-text-field
                                v-model="email"
                                label="Email"
                                browser-autocomplete="email"
                                required
                            ></v-text-field>
                        </v-list-tile>
                        <v-list-tile>
                            <v-text-field
                                v-model="password"
                                type="password"
                                label="Password"
                                required
                            ></v-text-field>
                        </v-list-tile>
                    </v-list>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat
                               @click="signIn"
                        >
                            {{$t('Sign_in')}}
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-menu>
    </v-toolbar-items>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';

  export default {
    data() {
      return {
        email: '',
        password: '',
        isAuthenticated: false,
      };
    },

    created() {
      firebase.app().auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
        }
        this.isAuthenticated = !!user;
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
  };
</script>

<style scoped>

</style>
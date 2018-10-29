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
                               @click="signIn(email, password)"
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
  export default {
    props: ['isAuthenticated', 'signIn', 'signOut'],

    data() {
      return {
        email: '',
        password: ''
      };
    },
  };
</script>

<style scoped>

</style>
<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md10 lg6>
      <h1>Admin page</h1>
      <v-layout justify-start v-for="(user, index) in users" class="user" :key="index">
        <div>{{ user.email }}</div>
        <div>{{ user.customClaims }}</div>
        <v-btn @click="onSetRole(index)">Set Role</v-btn>
        <input v-model="roles[index]" type="text"/>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'admin-page',

    data() {
      return {
        roles: [],
      }
    },

    created() {
      this.loadUsers();
    },

    methods: {
      ...mapActions('admin', {
        loadUsers: 'loadUsers',
        setRole: 'setRole',
      }),

      onSetRole(index) {
        const newRole = this.roles[index];
        newRole && this.setRole({
          email: this.users[index].email,
          role: newRole,
        });
      }
    },

    computed: {
      ...mapGetters('admin', {
        users: 'users'
      })
    }
  };
</script>

<style scoped>
  .user {
    padding: 5px;
  }

  .user * {
    margin: 0 10px;
  }

  input {
    border: 1px solid cornflowerblue;
  }
</style>
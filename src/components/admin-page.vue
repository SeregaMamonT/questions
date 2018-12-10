<template>
  <div>
    <h1>Admin page</h1>
    <div v-for="user in users" class="user">
      {{ user.email }}
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'admin-page',

    created() {
      this.loadUsers();
    },

    methods: {
      ...mapActions('admin', {
        loadUsers: 'loadUsers'
      })
    },

    computed: {
      ...mapGetters('admin', {
        users: 'users'
      })
    }
  };
</script>

<style scoped>
</style>
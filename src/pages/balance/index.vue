<template>
  <v-layout wrap justify-center>
    <v-row>
      <v-col xs12 sm12 md10 lg6>
        <h3 class="large">Balance here</h3>
        <div v-for="balance in balances">
          <v-row>
            <v-col sm="4">
              <v-card
                  class="pa-2"
                  tile
              >
                {{balance.name}}
              </v-card>
            </v-col>
            <v-col sm="4">
              <v-card
                  class="pa-2"
                  tile
              >
                {{balance.balance}}
              </v-card>
            </v-col>
            <v-col sm="4">
              <v-btn
                  color="primary"
                  class="pa-2"
                  dark
                  @click="showChangeBalanceDialog = true"
              >
                Open Dialog 3
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <change-balance-dialog
            v-model="changingBalance"
            :show="showChangeBalanceDialog"
            @close="onClose"
        />

      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
  import { mapGetters } from "vuex";
  import ChangeBalanceDialog from './change-balance-dialog';

  export default {
    name: "BalancePage",

    components: {
      'change-balance-dialog': ChangeBalanceDialog,
    },

    data() {
      return {
        changingBalance: {
          name: "asd",
        },
        showChangeBalanceDialog: false,
      };
    },

    computed: {
      ...mapGetters('balance', {
        balances: 'list',
      }),
    },

    methods: {
      onClose() {
        this.showChangeBalanceDialog = false;
      }
    }
  };
</script>

<style scoped>
</style>
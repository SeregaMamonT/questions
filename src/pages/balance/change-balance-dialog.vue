<template>
  <v-dialog
      :value="show"
      max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span>Change balance for ...</span>
        <v-spacer></v-spacer>
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on }">

          </template>
        </v-menu>
      </v-card-title>
      <v-card-actions>
        <v-btn
            color="primary"
            text
            @click="show = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "ChangeBalanceDialog",

    props: {
      value: {
        type: Object,
        required: true,
      },
      show: {
        type: Boolean,
        required: true,
      },
    },

    data() {
      return {
        modelValue: this.value,
        show: this.show,
      };
    },

    watch: {
      modelValue(val) {
        this.$emit('input', val);
      }
    }
  };
</script>

<style scoped>

</style>
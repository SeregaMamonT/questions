<template>
  <v-dialog
      :value="show"
      max-width="500px"
      @click:outside="onClose"
  >
    <v-card>
      <v-card-title>
        <span>{{title}}</span>
        <v-spacer></v-spacer>
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on }">
            <slot></slot>
          </template>
        </v-menu>
      </v-card-title>
      <v-card-actions>
        <v-btn
            color="primary"
            text
            @click="onClose"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "BasicDialog",

    props: {
      show: {
        type: Boolean,
        required: true,
      },
      title: {
        value: String,
        required: true,
      }
    },

    methods: {
      onClose() {
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <basic-dialog
      @close="closeHandler"
      :show="show"
      title="Change balance..."
  >
    <v-container>
      <h3>asdadasas</h3>
    </v-container>
  </basic-dialog>
</template>

<script>
  import BasicDialog from './basic-dialog';

  export default {
    name: "ChangeBalanceDialog",

    components: {
      'basic-dialog': BasicDialog,
    },

    props: {
      show: {
        type: Boolean,
        required: true,
      },
      onClose: {
        value: Function
      },
    },

    methods: {
      closeHandler() {
        this.$emit('close');
      }
    }
  };
</script>

<style scoped>

</style>
<template>
  <input type="file" id="input" @change="uploadFile" />
</template>

<script>
  export default {
    name: 'razdatka-field',

    data() {
      return {
        value: {
          image: null,
          text: null,
        },
      };
    },

    methods: {
      uploadFile(event) {
        const file = event.target.files.length ? event.target.files[0] : null;
        if (file) {
          const reader = new FileReader();

          // reader.onload = e => this.$emit("load", e.target.result);
          reader.onload = e => {
            console.log(e.target.result);
            this.image = e.target.result;
          };
          reader.readAsArrayBuffer(file);
        }
      },
    },
  };
</script>

<style scoped>

</style>
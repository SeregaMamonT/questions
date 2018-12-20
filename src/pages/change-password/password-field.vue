<template>
  <v-text-field
      v-model="modelValue"
      :type="showPassword ? 'text' : 'password'"
      :label="$t(label)"
      :append-icon="showPassword ? 'visibility_off' : 'visibility'"
      v-on:click:append="showPassword = !showPassword"
  ></v-text-field>
</template>

<script>
  export default {
    name: "password-field",

    props: {
      value: String,
      label: String,
    },

    data() {
      return {
        modelValue: this.value,
        showPassword: false,
      }
    },

    watch: {
      modelValue(val) {
        this.$emit('input', val);
      }
    }
  }
</script>

<style scoped>

</style>
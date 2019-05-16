<template>
  <v-text-field
    v-model="modelValue"
    :type="showPassword ? 'text' : 'password'"
    :label="$t(label)"
    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
    @click:append="showPassword = !showPassword"
  />
</template>

<script>
  export default {
    name: 'PasswordField',

    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
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
<template>
  <v-form>
    <div v-if="value.razdatka">
      <a class="edit-link" @click="onSwitchRazdatka">{{ $t('Remove_razdatka') }}</a>
      <razdatka-field v-if="value.razdatka" v-model="value.razdatka" />
    </div>
    <a v-if="!value.razdatka" class="edit-link" @click="onSwitchRazdatka">{{ $t('Add_razdatka') }}</a>

    <v-textarea
      v-model="value.text"
      :label="$t('Question_text')"
    />
    <v-text-field
      v-model="value.answer"
      :label="$t('Answer')"
    />
    <v-textarea
      v-model="value.commentary"
      :label="$t('Commentary')"
    />
    <v-textarea
      v-model="value.references"
      :label="$t('References')"
    />
    <v-select
      v-model="value.authors"
      item-text="name"
      item-value="id"
      :items="allAuthors"
      :label="$t('Author_s')"
      multiple
      chips
    />
    <v-btn @click="onSave(value)">
      {{ $t('Save') }}
    </v-btn>
    <v-btn @click="onCancel">
      {{ $t('Cancel') }}
    </v-btn>
  </v-form>
</template>

<script>
  import RazdatkaField from './razdatka-field';

  export default {
    components: {
      'razdatka-field': RazdatkaField,
    },

    props: {
      value: {
        type: Object,
        required: true,
      },
      allAuthors: {
        type: Array,
        required: true,
      },
      onSave: {
        type: Function,
        required: true,
      },
    },

    methods: {
      onCancel() {
        this.$router.go(-1);
      },

      onSwitchRazdatka() {
        this.value.razdatka = this.value.razdatka ? null : {
          imageSrc: null,
          text: null,
          mode: 'text',
        };
      },
    },
  };
</script>
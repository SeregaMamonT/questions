<template>
  <v-container fluid class="root">
    <v-radio-group v-model="model.mode" row>
      <v-radio :label="$t('Text')" value="text" />
      <v-radio :label="$t('Image')" value="image" />
    </v-radio-group>

    <div v-if="model.mode === 'image'" class="razdatka-image">
      <input id="input" type="file" @change="uploadFile">
      <img v-if="model.imageSrc" :src="imageSrc">
    </div>

    <div v-if="model.mode === 'text'">
      <v-textarea
        v-model="model.text"
        :label="$t('Razdatka_text')"
      />
    </div>
  </v-container>
</template>

<script>
  import {getTimestampName, getNameExtension} from 'app/services/fileNameService';
  import fileService from 'app/services/fileService';
  import imageService from 'app/services/imageService';
  import {Firebase} from 'app/firebase';

  const { TaskState } = Firebase.storage;

  export default {
    name: 'RazdatkaField',

    props: {
      value: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        model: {
          imageSrc: null,
          text: null,
          mode: 'text',
        },
        imageSrc: null,
      };
    },

    watch: {
      value: {
        handler(newValue) {
          this.initFromProps(newValue);
        },
      },

      model: {
        deep: true,
        handler() {
          this.$emit('input', Object.assign({}, this.model));
        },
      },

      'model.imageSrc': {
        immediate: true,
        handler(newValue) {
          this.updateImageUrl(newValue);
        },
      },
    },

    mounted() {
      this.initFromProps(this.value);
    },

    methods: {
      initFromProps(newProps) {
        Object.assign(this.model, newProps);
        this.model.mode === 'image' && this.updateImageUrl(this.model.imageSrc);
      },

      uploadFile(event) {
        fileService.uploadFile(event).then(res => {
          console.log(res.file);
          console.log(res.file.byteLength);
          res && imageService.resizeImage(res.file).then(resizedImage => {
            console.log(resizedImage);
            this.saveImageToStorage(resizedImage, res.fileName);
          });
        });
      },

      saveImageToStorage(image, originalName) {
        const handlers = {
          onStateChanged(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case TaskState.PAUSED:
                console.log('Upload is paused');
                break;
              case TaskState.RUNNING:
                console.log('Upload is running');
                break;
            }
          },
          onComplete: storageUnit => {
            console.log('File available at', storageUnit);
            this.model.imageSrc = storageUnit;
          },
          onError: error => console.log(error),
        };

        const imageName = this.generateImageName(originalName);
        fileService.saveTempImage(image, imageName, handlers);
      },

      generateImageName(originalName) {
        const { name, extension } = getNameExtension(originalName);
        return getTimestampName('seconds', `${name}_`, `.${extension}`, '_');
      },

      updateImageUrl(imageName) {
        fileService.getDownloadUrl(imageName)
          .then(downloadUrl => this.imageSrc = downloadUrl)
          .catch(console.log);
      },
    },
  };
</script>

<style scoped>
  .root {
    border: 0.1em dashed black;
    border-radius: 1em;
  }

  .razdatka-image img {
    max-width: 100%;
  }

  .razdatka-image input {
    display: block;
  }
</style>
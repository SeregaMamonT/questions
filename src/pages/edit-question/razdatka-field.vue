<template>
  <v-container fluid :style="{
      border: '0.1em dashed black',
      borderRadius: '1em',
    }">
    <v-radio-group v-model="model.mode" row>
      <v-radio :label="$t('Text')" value="text"></v-radio>
      <v-radio :label="$t('Image')" value="image"></v-radio>
    </v-radio-group>

    <div v-if="model.mode === 'image'">
      <input type="file" id="input" @change="uploadFile"/>
      <img v-if="model.imageSrc" :src="imageSrc"/>
    </div>

    <div v-if="model.mode === 'text'">
      <v-textarea
          v-model="model.text"
          :label="$t('Razdatka_text')"
      ></v-textarea>
    </div>
  </v-container>
</template>

<script>
  import firebase from 'app/firebase';
  import {getTimestampName, getNameExtension} from 'app/services/fileNameService';
  import {Firebase} from 'app/firebase';

  const { TaskState } = Firebase.storage;

  export default {
    name: 'razdatka-field',

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

    mounted() {
      this.initFromProps(this.value);
    },

    methods: {
      initFromProps(newProps) {
        Object.assign(this.model, newProps);
        this.model.mode === 'image' && this.updateImageUrl(this.model.imageSrc);
      },

      uploadFile(event) {
        const file = event.target.files.length ? event.target.files[0] : null;
        if (file) {
          const reader = new FileReader();
          reader.onload = e => {
            this.saveImageToStorage(e.target.result, file.name);
          };
          reader.readAsArrayBuffer(file);
        }
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
          onComplete: uploadTask => {
            console.log('File available at', uploadTask.snapshot.ref.fullPath);
            this.model.imageSrc = uploadTask.snapshot.ref.fullPath;
          },
          onError: error => console.log(error),
        };

        const imageName = this.generateImageName(originalName);
        this.saveToStorage(image, imageName, handlers);
      },

      saveToStorage(file, fileName, eventHandlers) {
        const storageRef = firebase.storage().ref('images');
        const fileRef = storageRef.child(fileName);
        const uploadTask = fileRef.put(file);

        uploadTask.on('state_changed',
          eventHandlers.onStateChanged,
          eventHandlers.onError,
          () => eventHandlers.onComplete(uploadTask));
      },

      generateImageName(originalName) {
        const { name, extension } = getNameExtension(originalName);
        return getTimestampName('seconds', `${name}_`, `.${extension}`, '_');
      },

      updateImageUrl(imageName) {
        imageName && firebase.storage().ref(imageName).getDownloadURL()
          .then(downloadUrl => this.imageSrc = downloadUrl)
          .catch(console.log);
      },
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
  };
</script>

<style scoped>

</style>
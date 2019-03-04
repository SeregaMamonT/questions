<template>
  <div>
    <input type="file" id="input" @change="uploadFile"/>
    <img v-if="model.imageSrc" :src="imageSrc"/>
  </div>
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
        },
        imageSrc: null,
      };
    },

    methods: {
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
            this.$emit('input', this.model);
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
    },

    watch: {
      value(newValue) {
        Object.assign(this.model, newValue);
      },

      'model.imageSrc'(newValue) {
        firebase.storage().ref(newValue).getDownloadURL()
          .then(downloadUrl => this.imageSrc = downloadUrl)
          .catch(console.log);
      },
    },
  };
</script>

<style scoped>

</style>
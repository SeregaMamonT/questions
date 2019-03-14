import firebase from 'app/firebase';

function getDownloadUrl(imageName) {
  return imageName ?
    firebase.storage().ref(imageName).getDownloadURL() :
    Promise.resolve(null);
}

function saveToStorage(file, fileName, eventHandlers) {
  const storageRef = firebase.storage().ref('images');
  const fileRef = storageRef.child(fileName);
  const uploadTask = fileRef.put(file);

  uploadTask.on('state_changed',
    eventHandlers.onStateChanged,
    eventHandlers.onError,
    () => eventHandlers.onComplete(uploadTask));
}

function uploadFile(event) {
  const file = event.target.files.length ? event.target.files[0] : null;
  if (file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve({
          file: e.target.result,
          fileName: file.name,
        });
      };
      reader.readAsArrayBuffer(file);
    });
  }
  return Promise.resolve(null);
}

export default {
  getDownloadUrl,
  saveToStorage,
  uploadFile,
};
import firebase from 'app/firebase';

function getDownloadUrl(storageUnit) {
  return storageUnit ?
    ref(storageUnit).getDownloadURL() :
    Promise.resolve(null);
}

function saveTempImage(file, imageName, eventHandlers) {
  const storageUnit = newStorageUnit('temp', imageName);
  saveToStorage(file, storageUnit, eventHandlers);
}

function saveToStorage(file, storageUnit, eventHandlers) {
  const storageRef = firebase.storage().ref(storageUnit.domain);
  const fileRef = storageRef.child(storageUnit.fileName);
  const uploadTask = fileRef.put(file);

  eventHandlers && uploadTask.on('state_changed',
    eventHandlers.onStateChanged,
    eventHandlers.onError,
    () => {
      fileRef.updateMetadata({
        cacheControl: 'max-age=31536000',
      });
      eventHandlers.onComplete && eventHandlers.onComplete(storageUnit);
    });
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

function getFileData(storageUnit) {
  return ref(storageUnit).getDownloadURL().then(url => {
    return fetch(url).then(res => res.blob());
  });
}

function copyFile(sourceUnit, destinationUnit) {
  return new Promise((resolve, reject) => {
    getFileData(sourceUnit).then(fileData => {
      saveToStorage(fileData, destinationUnit, {
        onStateChanged: () => {},
        onError: err => reject(err),
        onComplete: () => resolve(),
      })
    });
  });
}

function deleteFile(storageUnit) {
  return ref(storageUnit).delete();
}

function ref(storageUnit) {
  const storageRef = firebase.storage().ref(storageUnit.domain);
  return storageRef.child(storageUnit.fileName);
}

function newStorageUnit(domain, fileName) {
  return { domain, fileName };
}

export default {
  getDownloadUrl,
  saveTempImage,
  uploadFile,
  getFileData,
  copyFile,
  deleteFile,
};
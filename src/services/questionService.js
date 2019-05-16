import {mapActions, mapGetters} from 'app/utils/mappers';
import fileService from 'app/services/fileService';

export default {
  ...mapActions('question', {
    readCurrent: 'readCurrent',
    addQuestion: 'addQuestion',
    updateQuestion: 'updateQuestion',
  }),

  ...mapGetters('question', {
    questionById: 'questionById',
  }),

  add(question) {
    return checkImageSrc(null, question).then(() => {
      this.addQuestion(question);
    });
  },

  read(id) {
    this.readCurrent(id);
  },

  update(id, question) {
    const oldQuestion = this.questionById(question.id);
    return checkImageSrc(oldQuestion, question).then(() => {
      return this.updateQuestion({ id, question: question });
    });
  },
};

function checkImageSrc(oldQuestion, newQuestion) {
  const oldImage = oldQuestion && getRazdatkaImage(oldQuestion);
  const newImage = getRazdatkaImage(newQuestion);

  if (newImage) {
    return moveImageToPersistent(newImage).then(newStorageItem => {
      newQuestion.razdatka.imageSrc = newStorageItem;
      if (oldImage) {
        return fileService.deleteFile(oldImage)
          .catch(err => console.log(err));
      }
    });
  }
  return Promise.resolve();
}

function moveImageToPersistent(newImage) {
  if (newImage.domain === 'temp') {
    const newStorageItem = { domain: 'image', fileName: newImage.fileName };
    return fileService.copyFile(newImage, newStorageItem)
      .then(() => {
        return fileService.deleteFile(newImage)
          .then(() => newStorageItem);
      });
  }
  return Promise.resolve();
}

function getRazdatkaImage(question) {
  return question.razdatka && question.razdatka.mode === 'image' && question.razdatka.imageSrc;
}

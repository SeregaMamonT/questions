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
    this.checkImageSrc(question).then(() => {
      this.addQuestion(question);
    });
  },

  read(id) {
    this.readCurrent(id);
  },

  update(id, question) {
    this.checkImageSrc(question).then(() => {
      this.updateQuestion({ id, question });
    });
  },

  checkImageSrc(question) {
    // const oldQuestion = this.questionById(question.id);
    // const oldImage = oldQuestion && this.getRazdatkaImage(question);
    // const newImage = this.getRazdatkaImage(question);
    //
    // if (question.razdatka && question.razdatka.mode === 'image') {
    //   const imageSrc = question.razdatka.imageSrc;
    //   if (imageSrc.domain === 'temp') {
    //     const newStorageItem = { domain: 'image', fileName: imageSrc.fileName };
    //     return fileService.copyFile(imageSrc, newStorageItem)
    //       .then(() => {
    //         question.razdatka.imageSrc = newStorageItem;
    //         fileService.deleteFile(imageSrc);
    //       });
    //   }
    // }
    return Promise.resolve();
  },

  getRazdatkaImage(question) {
    return question.razdatka && question.razdatka.mode === 'image' && question.razdatka.imageSrc;
  }
};

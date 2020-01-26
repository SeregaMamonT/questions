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

  async add(question) {
    await checkImageSrc(null, question);
    this.addQuestion(question)
  },

  read(id) {
    this.readCurrent(id);
  },

  async update(id, question) {
    const oldQuestion = this.questionById(question.id);
    await checkImageSrc(oldQuestion, question);
    return this.updateQuestion({ id, question: question });
  },
};

async function checkImageSrc(oldQuestion, newQuestion) {
  const oldImage = oldQuestion && getRazdatkaImage(oldQuestion);
  const newImage = getRazdatkaImage(newQuestion);

  if (newImage) {
    newQuestion.razdatka.imageSrc = await moveImageToPersistent(newImage);
    if (oldImage) {
      try {
        return await fileService.deleteFile(oldImage);
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}

async function moveImageToPersistent(storageItem) {
  if (storageItem.domain === 'temp') {
    const newStorageItem = { domain: 'image', fileName: storageItem.fileName };
    await fileService.copyFile(storageItem, newStorageItem);
    await fileService.deleteFile(storageItem);
    return newStorageItem;
  }
}

function getRazdatkaImage(question) {
  return question.razdatka && question.razdatka.mode === 'image' && question.razdatka.imageSrc;
}

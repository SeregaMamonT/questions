import store from 'app/store';
import {getTimestampName} from './fileNameService';

function createDump() {
  const fileName = getTimestampName('minutes', 'dump_', '.json', '_');
  download(fileName, JSON.stringify(getData()));
}

function getData() {
  return {
    questions: store.getters['question/list'],
    authors: store.getters['author/list'],
  };
}

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default {
  createDump
};
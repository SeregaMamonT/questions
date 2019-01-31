import store from 'app/store';

function downloadDump() {
  download(getDumpFileName(), JSON.stringify(getData()));
}

function getData() {
  return {
    questions: store.getters['question/list'],
    authors: store.getters['author/list'],
  };
}

function getDumpFileName() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `dump_${year}_${month}_${day}_${hours}_${minutes}.json`;
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

export default downloadDump;
export function getTimestampName(preceision = 'minutes', prefix = '', suffix = '', separator = '') {
  const date = new Date();
  const tokens = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  ];
  if (preceision !== 'minutes') {
    tokens.push[date.getSeconds()];
    if (preceision !== 'seconds') {
      tokens.push[date.getMilliseconds()];
    }
  }
  return getFileName(tokens, prefix, suffix, separator);
}

export function getNameExtension(fileName) {
  const index = fileName.lastIndexOf('.');
  if (index !== -1) {
    return {
      name: fileName.substring(0, index),
      extension: fileName.substring(index + 1),
    };
  }
  else {
    return {
      name: fileName,
      extension: '',
    };
  }
}

function getFileName(tokens, prefix, suffix, separator) {
  return prefix + tokens.join(separator) + suffix;
}

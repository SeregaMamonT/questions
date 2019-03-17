import jimp from 'jimp';

const MaxWidth = 800;
const Quality = 95;

function resizeImage(image) {
  return jimp.read(image).then(jimpImage => {
    if (jimpImage.getWidth() > MaxWidth) {
      jimpImage = jimpImage
        .resize(MaxWidth, jimp.AUTO)
        .quality(Quality);
    }
    return jimpImage.getBufferAsync(jimp.AUTO);
  });
}

export default {
  resizeImage,
}
const convertTypeImage = type => {
  let imageType = type;
  switch (type) {
    case 'avif':
      imageType = 'avif';
      break;
    case 'apng':
      imageType = 'apng';
    case 'webp':
      imageType = 'webp';
      break;
    case 'bmp':
      imageType = 'bmp';
      break;
    case 'gif':
      imageType = 'gif';
      break;
    case 'jpeg':
    case 'jpg':
    case 'jfif':
    case 'pjpeg':
    case 'pjp':
      imageType = 'jpeg';
      break;
    case 'png':
      imageType = 'png';
      break;
    case 'svg':
      imageType = 'svg+xml';
      break;
    case 'tiff':
    case 'tif':
      imageType = 'tiff';
      break;
    case 'ico':
    case 'cur':
      imageType = 'x-icon';
      break;
    case 'bmp':
      imageType = 'bmp';
    default:
      imageType = 'jpeg';
      break;
  }
  return `image/${imageType}`;
};

export default convertTypeImage;

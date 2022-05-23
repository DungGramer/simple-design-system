import boxModel from './boxModel';

function splitAspectRatio(aspectRatio) {
  if (!aspectRatio) return null;

  let ratio = aspectRatio.split(/:|\/| /);
  let ratioHeight = ratio[1] / ratio[0];
  let ratioWidth = ratio[0] / ratio[1];

  return {
    ratioHeight,
    ratioWidth,
    ratioLeft: ratio[0],
    ratioRight: ratio[1],
  };
}

function setHeightAspectRatio(width, aspectRatio) {
  if (!aspectRatio || !width) return null;

  const { ratioHeight } = splitAspectRatio(aspectRatio);

  const height = width * ratioHeight;

  return Math.floor(height);
}

function setWidthAspectRatio(height, aspectRatio) {
  if (!aspectRatio || !height) return null;

  const { ratioWidth } = splitAspectRatio(aspectRatio);

  const width = height * ratioWidth;

  return Math.floor(width);
}

function setWidthHeight(ref, aspectRatio) {
  if (!aspectRatio || !ref) return [null, null];

  const { ratioHeight } = splitAspectRatio(aspectRatio);

  const { size } = boxModel(ref.current);

  let height = size.width * ratioHeight;

  return [size.width, Math.floor(height)];
}

function setWidthHeightAspectRatio(width, height, aspectRatio, ref) {
  if ([width, height].includes(undefined) && aspectRatio) {
    [width, height] = setWidthHeight(ref, aspectRatio);
  } else if (width === undefined && aspectRatio && height) {
    width = setWidthAspectRatio(height, ref);
  } else if (height === undefined && aspectRatio && width) {
    height = setHeightAspectRatio(width, ref);
  }

  return [width, height];
}

export {
  splitAspectRatio,
  setHeightAspectRatio,
  setWidthAspectRatio,
  setWidthHeightAspectRatio,
};

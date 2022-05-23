import splitUnit from '~/constants/splitUnit';

export const picsumURL = (
  width = 48,
  height = 48,
  id = Math.floor(Math.random() * 100)
) => {
  return (
    'http://picsum.photos/' + width + '/' + (height || width) + (id && '?' + id)
  );
};

function imageMockup(width, height, length) {
  const mockup = [];
  for (let i = 1; i <= length; i++) {
    mockup.push({
      url: picsumURL(width, height, i),
      width: width,
      height: height,
      id: i,
      alt: `Alt text for image ${i}`,
    });
  }
  return mockup;
}

export const avatarMockup = (size = 100, id) => {
  size = splitUnit(size);
  id = id || Math.floor(Math.random() * 100);

  return `https://i.pravatar.cc/${size}?img=${id}`;
};

export default imageMockup;

function picsumURL(width, height, id) {
  return 'http://picsum.photos/' + width + '/' + height + '/' + `?${id}`;
}

function imageMockup (width, height, length) {
  const mockup = [];
  for (let i = 1; i <= length; i++) {
    mockup.push({
      url: picsumURL(width, height, i),
      width: width,
      height: height,
      id: i,
      alt: `Alt text for image ${i}`
    });
  }
  return mockup;
}

export default imageMockup;


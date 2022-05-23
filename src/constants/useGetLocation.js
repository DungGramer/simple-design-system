import boxModel from './boxModel';

const getLocation = (ref) => {
  const { size } = boxModel(ref.current);

  if (!ref.current || !ref) return;

  if (ref.current) {
    const heightHeader = document.getElementById('header').clientHeight;
    const { innerHeight, innerWidth } = window;

    const { top, left, bottom, right, x, y } =
      ref.current.getBoundingClientRect();

    return {
      x,
      y,
      top,
      left,
      bottom,
      right,

      widthScreen: innerWidth,
      heightScreen: innerHeight,

      spaceTop: Math.abs(top - heightHeader),
      spaceBottom: Math.abs(innerHeight - y - size.maxHeight),
      spaceLeft: x,
      spaceRight: Math.abs(innerWidth - x - size.maxWidth),

      maxSpaceHorizontal: Math.max(innerHeight - y, top - heightHeader),
      minSpaceHorizontal: Math.min(innerHeight - y, top - heightHeader),
    };
  }
};

export default getLocation;

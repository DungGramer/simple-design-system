const getLocation = (ref) => {
  if (!ref.current || !ref) return;

  if (ref.current) {
    const heightHeader = document.getElementById('header').clientHeight;
    const {innerHeight, innerWidth} = window;

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
      spaceBottom: Math.abs(innerHeight - y),
      spaceLeft: x,
      spaceRight: innerWidth - x,

      maxSpaceHorizontal: Math.max(innerHeight - y, top - heightHeader),
      minSpaceHorizontal: Math.min(innerHeight - y, top - heightHeader),
    };
  }
};

export default getLocation;

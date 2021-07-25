import splitUnit from "./splitUnit";

const boxModel = ele => {
  const {
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderBottomWidth,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    width,
    height,
  } = getComputedStyle(ele);

  return {
    border: {
      left: splitUnit(borderLeftWidth),
      right: splitUnit(borderRightWidth),
      top: splitUnit(borderTopWidth),
      bottom: splitUnit(borderBottomWidth),
      vertical: splitUnit(borderTopWidth) + splitUnit(borderBottomWidth),
      horizontal: splitUnit(borderLeftWidth) + splitUnit(borderRightWidth),
    },
    margin: {
      left: splitUnit(marginLeft),
      right: splitUnit(marginRight),
      top: splitUnit(marginTop),
      bottom: splitUnit(marginBottom),
      vertical: splitUnit(marginTop) + splitUnit(marginBottom),
      horizontal: splitUnit(marginLeft) + splitUnit(marginRight),
    },
    padding: {
      left: splitUnit(paddingLeft),
      right: splitUnit(paddingRight),
      top: splitUnit(paddingTop),
      bottom: splitUnit(paddingBottom),
      vertical: splitUnit(paddingTop) + splitUnit(paddingBottom),
      horizontal: splitUnit(paddingLeft) + splitUnit(paddingRight),
    },
    size: {
      width: splitUnit(width),
      height: splitUnit(height),
    },
  };
};

export default boxModel;



const spaceToDash = str => {
  if (!str) return '';
  return str.replace(/\s+/g, '-');
}

// exports.convertTypeImage = convertTypeImage;
exports.spaceToDash = spaceToDash;

export const objectGenerator = (keys, length, random = false) => {
  if (!keys || length < 0) return null;

  let object = {};

  for (let item of keys) {
    object[item] = require(`./${item}`).default;
  }

  let result = [];
  for (let i = 0; i < length; i++) {
    let temp = {};
    for (let item of keys) {
      if (random) {
        temp[item] =
          object[item][Math.floor(Math.random() * object[item].length)];
      } else {
        temp[item] = object[item][i];
      }
    }
    result.push(temp);
  }

  return result;
};

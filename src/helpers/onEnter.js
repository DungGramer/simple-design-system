export const onEnter = (event, callback) => {
  if (event.keyCode === 13 || event.key === 'Enter') {
    callback();
  }
};

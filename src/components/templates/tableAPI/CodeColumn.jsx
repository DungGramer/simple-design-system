const CodeColumn = ({ data }) => {
  let spanData = data.reduce((prev, curr, index) => {
    prev += `<code>${curr}${index === data.length - 1 ? '' : '</code> | '}`;
    return prev;
  }, '');

  return <span dangerouslySetInnerHTML={{ __html: spanData }} />;
};

export default CodeColumn;

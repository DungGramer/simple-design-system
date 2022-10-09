import TextArea from '@molecules/text-area/TextArea';

const TextAreaResize = () => {
  return (
    <>
      <p>Auto</p>
      <TextArea />
      <p>None</p>
      <TextArea resize="none" />
      <p>Vertical</p>
      <TextArea resize="vertical" />
      <p>Horizontal</p>
      <TextArea resize="horizontal" />
    </>
  );
};

export default TextAreaResize;

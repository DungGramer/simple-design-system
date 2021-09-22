import Button from '@atoms/button/Button';

const ButtonType = () => {
  return (
    <>
      <Button title="Click me" />
      <Button title="Click me" type="primary" />
      <Button title="Click me" type="dashed" />
      <Button title="Click me" type="text" />
      <Button title="Click me" type="link" />
    </>
  );
};

export default ButtonType;
import Button from '@atoms/button/Button';

const ButtonIcon = () => {
  return (
    <>
      <Button icon="fas fa-search" />
      <Button icon="fas fa-search" type="primary" shape="circle" />
      <Button title="Search" icon="fas fa-search" type="dashed" />
    </>
  );
};

export default ButtonIcon;

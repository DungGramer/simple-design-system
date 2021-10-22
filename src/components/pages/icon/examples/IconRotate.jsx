import Icon from '@atoms/icon/Icon';

const IconRotate = () => {
  return (
    <>
      <Icon icon="far fa-horse" />
      <Icon icon="far fa-horse" rotate={90} />
      <Icon icon="far fa-horse" rotate={180} />
      <Icon icon="far fa-horse" rotate={270} />
    </>
  );
};

export default IconRotate;
import Icon from '@atoms/icon/Icon';

const IconFlip = () => {
  return (
    <>
      <Icon icon="fas fa-biking" />
      <Icon icon="fas fa-biking" flip="horizontal" />
      <Icon icon="fas fa-biking" flip="vertical" />
      <Icon icon="fas fa-biking" flip="both" />
    </>
  );
};

export default IconFlip;
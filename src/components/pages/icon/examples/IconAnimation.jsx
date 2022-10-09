import Icon from '@atoms/icon/Icon';
import { FaSpinner } from 'react-icons/fa';

const IconAnimation = () => {
  return (
    <>
      <Icon icon={<FaSpinner />} animation="spin" />
      <Icon icon={<FaSpinner />} animation="pulse" />
      <Icon icon={<FaSpinner />} animation="fade" />
      <Icon icon={<FaSpinner />} animation="beat" />
      <Icon icon={<FaSpinner />} animation="bounce" />
    </>
  );
};

export default IconAnimation;

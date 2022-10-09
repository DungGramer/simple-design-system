import Icon from '@atoms/icon/Icon';
import { FaHorse } from 'react-icons/fa';

const IconRotate = () => {
  return (
    <>
      <Icon icon={<FaHorse />} />
      <Icon icon={<FaHorse />} rotate={90} />
      <Icon icon={<FaHorse />} rotate={180} />
      <Icon icon={<FaHorse />} rotate={270} />
    </>
  );
};

export default IconRotate;

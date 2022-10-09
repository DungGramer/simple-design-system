import Icon from '@atoms/icon/Icon';
import { FaBiking } from 'react-icons/fa';

const IconFlip = () => {
  return (
    <>
      <Icon icon={<FaBiking />} />
      <Icon icon={<FaBiking />} flip="horizontal" />
      <Icon icon={<FaBiking />} flip="vertical" />
      <Icon icon={<FaBiking />} flip="both" />
    </>
  );
};

export default IconFlip;

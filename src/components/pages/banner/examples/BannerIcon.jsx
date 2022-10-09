import Banner from '@molecules/banner/Banner';
import { FaDizzy } from 'react-icons/fa';

const BannerIcon = () => {
  return (
    <>
      <Banner icon={<FaDizzy />}>Banner with icon</Banner>
    </>
  );
};

export default BannerIcon;

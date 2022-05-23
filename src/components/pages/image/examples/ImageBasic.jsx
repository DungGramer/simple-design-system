import Image from '@molecules/image/Image';
import { picsumURL } from '~/mock/imageMockup';

const src = picsumURL(1280, 720);

const ImageBasic = () => {
  return (
    <>
      <Image src={src} />
    </>
  );
};

export default ImageBasic;

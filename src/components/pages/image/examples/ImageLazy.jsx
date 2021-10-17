import Image from '@molecules/image/Image';
import { picsumURL } from '~/mock/imageMockup';

const src = picsumURL(1920, 1080);

const ImageLazy = () => {
  return (
    <>
      <Image src={src} lazy />
    </>
  );
};

export default ImageLazy;
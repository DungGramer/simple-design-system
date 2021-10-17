import Image from '@molecules/image/Image';

const src = '/assets/images/flamingo';

const ImageSrcset = () => {
  return (
    <>
      <Image
        width={200}
        srcset={`${src}/flamingo4x.jpg 4x, ${src}/flamingo3x.jpg 3x, ${src}/flamingo2x.jpg 2x, ${src}/flamingo1x.jpg 1x`}
        src={`${src}/flamingo-fallback.jpg`}
      />
    </>
  );
};

export default ImageSrcset;
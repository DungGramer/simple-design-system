import Image from '@molecules/image/Image';
import imageMockup from '~/mock/imageMockup';


const imgs = imageMockup(1920, 1080, 30);

const ImageGroup = () => {

  return (
    <>
      {imgs.map((img, index) => (
        <Image
          key={index}
          src={img.url}
          alt={img.alt}
          lazy
          aspectRatio="16/9"
          width={320}
        />
      ))}
    </>
  );
};

function ImagePage({}) {
  return (
    <div>
      <h1>Image</h1>
      <ImageGroup />
    </div>
  );
}

ImagePage.propTypes = {};

export default ImagePage;

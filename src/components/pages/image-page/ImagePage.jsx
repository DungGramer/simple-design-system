import styles from './ImagePage.module';
import PropTypes from 'prop-types';
import Image from '@molecules/Image/Image';
import imageMockup from '~/mock/imageMockup';

const imgs = imageMockup(1920, 1080, 50);

function ImagePage({}) {
  return (
    <div>
      <h1>Image</h1>
      {imgs.map(img => (
        <Image key={img.id} src={img.url} alt={img.alt} lazy={true} />
      ))}
    </div>
  );
}

ImagePage.propTypes = {};

export default ImagePage;

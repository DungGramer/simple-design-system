import styles from './Image.module';
import PropTypes from 'prop-types';
import convertTypeImage from '~/constants/converter';

// components lazy load image

const Image = ({ src, alt, lazy, width, height, type, decoding, srcset }) => {
  return (
    <img
      className={`${styles.img}`}
      alt={alt}
      src={src}
      width={width}
      height={height}
      loading={lazy && 'lazy'}
      type={convertTypeImage(type)}
      decoding={decoding}
      srcSet={srcset}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  decoding: PropTypes.oneOf(['sync', 'async']),
  srcset: PropTypes.string,
};

export default Image;

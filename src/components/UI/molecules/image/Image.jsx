import styles from './Image.module';
import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import useOnScreen from '@components/hooks/useOnScreen';
import {
  setWidthHeightAspectRatio,
  splitAspectRatio,
} from '~/constants/getAspectRatio';

const convertTypeImage = (type) => {
  let imageType = type;
  switch (type) {
    case 'avif':
      imageType = 'avif';
      break;
    case 'apng':
      imageType = 'apng';
    case 'webp':
      imageType = 'webp';
      break;
    case 'bmp':
      imageType = 'bmp';
      break;
    case 'gif':
      imageType = 'gif';
      break;
    case 'jpeg':
    case 'jpg':
    case 'jfif':
    case 'pjpeg':
    case 'pjp':
      imageType = 'jpeg';
      break;
    case 'png':
      imageType = 'png';
      break;
    case 'svg':
      imageType = 'svg+xml';
      break;
    case 'tiff':
    case 'tif':
      imageType = 'tiff';
      break;
    case 'ico':
    case 'cur':
      imageType = 'x-icon';
      break;
    case 'bmp':
      imageType = 'bmp';
    default:
      imageType = 'jpeg';
      break;
  }
  return `image/${imageType}`;
};

const ImageContext = createContext();

const isIntersectionObserverSupported =
  typeof IntersectionObserver !== 'undefined';

const supportAspectRatio = CSS.supports('--aspect-ratio', '1:1');

const LazyImage = () => {
  const {
    src,
    alt,
    width,
    height,
    type,
    decoding,
    lazy,
    srcset,
    aspectRatio,
    supportAspectRatio,
  } = useContext(ImageContext);
  const [newWidth, setNewWidth] = useState(width);
  const [newHeight, setNewHeight] = useState(height);
  const ref = useRef(null);

  // Add src image out the viewport
  useOnScreen(ref, '600px', 0, () => {
    const imgSelector = ref.current.querySelector('img');
    imgSelector.src = src;
  });

  // Add animation when image is in viewport
  useOnScreen(ref, '-50px', 0.1, () => {
    const imgSelector = ref.current.querySelector('img');
    imgSelector.style.animation = 'fade-loading 0.3s forwards ease-out';
  });

  // Set width, height with aspect ratio
  if (aspectRatio && supportAspectRatio) {
    useEffect(() => {
      const setHeight = () => {
        const [newWidth, newHeight] = setWidthHeightAspectRatio(
          width,
          height,
          aspectRatio,
          ref
        );
        setNewWidth(newWidth);
        setNewHeight(newHeight);
      };
      setHeight();
    }, [src, width, height, aspectRatio]);
  }

  return (
    <picture ref={ref}>
      {
        <img
          className={`${styles.img}`}
          width={newWidth}
          height={newHeight}
          alt={alt}
          type={convertTypeImage(type)}
          loading={lazy && 'lazy'}
          decoding={decoding}
          srcSet={srcset}
          style={{
            aspectRatio: supportAspectRatio && aspectRatio,
            height: supportAspectRatio && 'auto',
          }}
        />
      }
    </picture>
  );
};

const StaticImage = () => {
  const { src, alt, width, height, type, decoding, srcset, lazy, aspectRatio } =
  useContext(ImageContext);

  return (
    <img
      src={src}
      className={`${styles.img}`}
      alt={alt}
      width={width}
      height={height}
      loading={lazy && 'lazy'}
      type={convertTypeImage(type)}
      decoding={decoding}
      srcSet={srcset}
      style={{
        aspectRatio,
      }}
    />
  );
};

const AspectRatioPicture = () => {
  const { src, aspectRatio } = useContext(ImageContext);

  const { ratioLeft, ratioRight } = splitAspectRatio(aspectRatio) || 0;

  return (
    <svg
      viewBox={`0 0 ${ratioLeft} ${ratioRight}`}
      className={styles.svg}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

const Image = ({
  src,
  alt,
  lazy,
  width,
  height,
  type,
  decoding,
  srcset,
  aspectRatio,
}) => {
  return (
    <ImageContext.Provider
      value={{
        isIntersectionObserverSupported,
        src,
        alt,
        lazy,
        width,
        height,
        type,
        decoding,
        srcset,
        aspectRatio,
        supportAspectRatio,
      }}
    >
      {isIntersectionObserverSupported && lazy ? (
        <LazyImage />
      ) : aspectRatio && !supportAspectRatio ? (
        <AspectRatioPicture />
      ) : (
        <StaticImage />
      )}
    </ImageContext.Provider>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.oneOf([
    'avif',
    'apng',
    'bmp',
    'gif',
    'jpeg',
    'jpg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'tiff',
    'tif',
    'ico',
    'cur',
    'bmp',
  ]),
  decoding: PropTypes.oneOf(['sync', 'async']),
  srcset: PropTypes.string,
};

Image.defaultProps = {
  type: 'jpg',
};

export default Image;

import styles from './Avatar.module';
import PropTypes from 'prop-types';
import Dropdown from '@atoms/dropdown/Dropdown';
import React, { createRef, forwardRef, useRef } from 'react';
import useToggle from '@components/hooks/useToggle';

const Avatar = ({ appearance, src, size, status }) => {
  const Status = () => (
    <>
      {status && (
        <i
          className={`${
            status && `${styles.status} ${styles['status-' + status]}`
          }`}
        />
      )}
    </>
  );

  return (
    <>
      <div
        className={`${styles['avatar']} ${styles[appearance]} ${styles[size]}`}
      >
        <Status />
        <img src={src} />
      </div>
    </>
  );
};

/**
 * Using for avatar group when the number of avatars is more than length
 * @param {string} text
 * @param {string} size
 *
 * @memberof Avatar.Group
 * @example
 * <AvatarText text="+2" size="small" />
 */
const AvatarText = forwardRef(({ text, size, innerRef }, ref) => {
  return (
    <div ref={ref} className={`${styles['avatar-text']} ${styles[size]}`}>
      {text}
    </div>
  );
});

const Group = ({ children, size, length }) => {
  const lengthRemaining = (length < children.length) && (children.length - length) + 1;

  const childrenSlice = lengthRemaining ? children.slice(0, length - 1) : children;
  const childrenRemaining = lengthRemaining && children.slice(length - 1);

  const avatarTextRef = useRef();

  return (
    <div className={`${styles['avatar-group']} ${styles[size]}`}>
      {childrenSlice.map(child => child)}
      {lengthRemaining && (
        <AvatarText
          ref={avatarTextRef}
          text={`+${lengthRemaining}`}
          size={size}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  appearance: PropTypes.oneOf(['square', 'circle']),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  status: PropTypes.oneOf(['online', 'offline', 'busy']),
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  appearance: 'circle',
  size: 'medium',
};

Avatar.displayName = 'Avatar';
Avatar.Group = Group;
Avatar.Group.displayName = 'Avatar.Group';
export default Avatar;

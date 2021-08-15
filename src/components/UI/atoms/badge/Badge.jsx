import styles from './Badge.module';
import PropTypes from 'prop-types';
import { spaceToDash } from '~/constants/converter';
import { useEffect, useRef } from 'react';
import useSetRelativeParent from '@components/hooks/useSetRelativeParent';

function switchPrefix(appearance) {
  switch (appearance) {
    case 'success':
      return '✔';
    case 'warning':
      return '⚠';
    case 'danger':
      return '✖';
    case 'info':
      return 'ℹ';
    case 'added':
      return '+';
    case 'removed':
      return '-';
    default:
      return '';
  }
}

function Badge({ children, appearance, max, size, icon, direction, offset }) {
  const prefix = switchPrefix(appearance);
  const suffix = max < Number(children) ? `${max}+` : children;

  const badgeRef = useRef(null);

  // If have direction, set relative position for parent
  useSetRelativeParent(badgeRef, direction);

  const [direction1, direction2] = direction?.split(/ |\-/) || [null, null];

  const setOffset = () => {
    if (!offset || direction1 === null && direction2 === null) {
      return;
    }

    badgeRef.current.style[direction1] = offset?.[0] + 'px';
    badgeRef.current.style[direction2] = offset?.[1] + 'px';
  }

  useEffect(() => {
    setOffset();
  }, [direction, offset]);

  return (
    <span
      ref={badgeRef}
      className={`${styles[appearance]} ${styles.badge || ''} ${styles[size] || ''} ${styles[direction] || ''} ${styles[spaceToDash(direction)] || ''}`}
    >
      {icon || prefix} {suffix}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([
    'primary',
    'primaryInverted',
    'important',
    'added',
    'removed',
    'success',
    'error',
    'danger',
    'warning',
    'dot',
  ]),
  max: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large']),
  icon: PropTypes.string,
  direction: PropTypes.oneOf([
    'left-top',
    'left top',
    'top-left',
    'top left',

    'top-right',
    'top right',
    'right-top',
    'right top',

    'right-bottom',
    'right bottom',
    'bottom-right',
    'bottom right',

    'bottom-left',
    'bottom left',
    'left-bottom',
    'left bottom',
  ]).isRequired,
  offset: PropTypes.array,
};

Badge.defaultProps = {
  appearance: 'primary',
};

export default Badge;

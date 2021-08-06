import styles from './Badge.module';
import PropTypes from 'prop-types';

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

function Badge({ children, appearance, max, size, icon }) {

  const prefix = switchPrefix(appearance);
  const suffix = max < Number(children) ? `${max}+` : children;

  return (
    <span className={`${styles[appearance]} ${styles.badge} ${styles[size]}`}>
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
  ]),
  max: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Badge;

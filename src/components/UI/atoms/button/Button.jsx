import styles from './Button.module';
import PropTypes from 'prop-types';
import useToggle from '@components/hooks/useToggle';
import { forwardRef } from 'react';

const Button = forwardRef(({title, type, icon, size, loading, block, danger, shape, disabled, onClick}, ref) => {

  return (
    <button
      ref={ref}
      className={`${styles['button']} ${styles[type]} ${styles[shape]} ${styles[size]} ${disabled ? styles.disabled : ''} ${
        loading ? styles.loading : ''
      }`}
      onClick={onClick}
    >
      {loading && <i className="fal fa-spinner-third fa-spin" />}
      {icon && !loading && <i className={icon} />}
      {title && <span>{title}</span>}
    </button>
  );
});

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  // danger: PropTypes.bool,
  shape: PropTypes.oneOf(['circle']),
};

Button.defaultProps = {
  type: 'default',
}

export default Button;

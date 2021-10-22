import styles from './Icon.module';
import PropTypes from 'prop-types';

const Icon = ({ icon, color, size, rotate, flip, animation, fullWidth, cursor }) => {
  return (
    <i
      className={`${icon} ${styles['icon']} ${
        rotate ? `fa-rotate-${rotate}` : ''
      } ${flip ? `fa-flip-${flip}` : ''} ${
        animation ? `fa-${animation}` : ''
      } ${fullWidth ? 'fa-fw' : ''} `}
      style={{ color, fontSize: size, cursor }}
    />
  );
};

const IconType = ({ color, size, rotate, flip, animation, type }) => {
  const colorType = {
    primary: 'var(--primary-500)',
    secondary: 'var(--secondary-500)',
    success: 'var(--font-color-invert)',
    error: 'var(--font-color-invert)',
    warning: 'var(--font-color)',
    info: 'var(--info-color)',
  };
  const typeIcon = {
    info: 'fas fa-info-circle',
    success: 'fas fa-check-circle',
    warning: 'fas fa-exclamation-triangle',
    error: 'fas fa-times',
  };

  return (
    <i
      className={`${typeIcon[type]} fa-fw ${styles['icon']} ${
        rotate ? `fa-rotate-${rotate}` : ''
      } ${flip ? `fa-flip-${flip}` : ''} ${
        animation ? `fa-${animation}` : ''
      } `}
      style={{ color: color || colorType[type], fontSize: size }}
    />
  );
};

Icon.propTypes = {
  rotate: PropTypes.oneOf(['90', '180', '270']),
  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
  animation: PropTypes.oneOf(['spin', 'pulse']),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

Icon.Type = IconType;
export default Icon;

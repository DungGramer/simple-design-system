import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './Icon.module';

const Icon = ({ icon, color, size, rotate, flip, animation, cursor, attr, className }) => {
  return (
    <IconContext.Provider
      value={{
        className: `${styles['icon']} ${rotate ? styles[`rotate-${rotate}`] : ''} ${
          flip ? styles[`flip-${flip}`] : ''
        } ${animation ? styles[`animation-${animation}`] : ''} ${className || ''}`,
        style: { color, fontSize: size, cursor },
        attr,
        color,
      }}
    >
      {icon}
    </IconContext.Provider>
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
  const TypeIcon = {
    info: <FaInfoCircle />,
    success: <FaCheckCircle />,
    warning: <FaExclamationCircle />,
    error: <FaTimesCircle />,
  };

  return (
    <Icon
      icon={TypeIcon[type]}
      color={color || colorType[type]}
      size={size}
      rotate={rotate}
      flip={flip}
      animation={animation}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotate: PropTypes.oneOf(['90', '180', '270', 90, 180, 270]),
  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
  animation: PropTypes.oneOf(['spin', 'spin-pulse', 'fade', 'beat', 'bounce']),
  cursor: PropTypes.string,
  attr: PropTypes.object,
  className: PropTypes.string,
};

IconType.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

Icon.Type = IconType;
export default Icon;

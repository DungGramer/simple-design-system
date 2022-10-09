import styles from './Banner.module';
import PropTypes from 'prop-types';
import { FaBullhorn, FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';

/**
 * Banner displays a message to the user.
 *
 * @param {Object} props
 * @param {Element} [props.icon] - icon class name
 * @param {string} props.children - text to display
 * @param {string} props.type - type of banner
 *
 * @example
 * <Banner type="error">Error goes here</Banner>
 */

const Banner = ({ icon, children, type }) => {
  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <div className={styles.container}>
        <IconType type={type} icon={icon} />
        <p>{children}</p>
      </div>
    </div>
  );
};

const IconType = ({ icon, type }) => {
  let IconClass = icon;

  if (IconClass === undefined) {
    switch (type) {
      case 'error':
        IconClass = <FaExclamationCircle />;
        break;
      case 'warning':
        IconClass = <FaExclamationTriangle />;
        break;
      case 'announcement':
        IconClass = <FaBullhorn />;
        break;
      default:
        IconClass = '';
        break;
    }
  }
  return <>{IconClass}</>;
};

Banner.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['warning', 'error', 'announcement']),
};

Banner.defaultProps = {
  type: 'warning',
};

export default Banner;

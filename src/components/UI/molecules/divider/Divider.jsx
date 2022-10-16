import styles from './Divider.module';
import PropTypes from 'prop-types';

const Divider = ({ icon, direction, ...props }) => {
  return (
    <hr
      className={`${styles['divider']} ${styles[direction]} ${icon ? `${styles.icon}` : ''}`}
      {...props}
    />
  );
};

Divider.propTypes = {
  icon: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

Divider.defaultProps = {
  direction: 'horizontal',
};

export default Divider;

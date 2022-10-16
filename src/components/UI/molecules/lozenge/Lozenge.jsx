import styles from './Lozenge.module';
import PropTypes from 'prop-types';

const Lozenge = ({ appearance, children, maxWidth, isBold }) => {
  return (
    <span
      className={`${styles['lozenge']} ${styles[appearance]} ${isBold ? styles.bold : ''}`}
      style={{ maxWidth }}
    >
      {children}
    </span>
  );
};

Lozenge.propTypes = {
  appearance: PropTypes.oneOf(['success', 'removed', 'inprogress', 'new', 'moved']),
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number,
  isBold: PropTypes.bool,
};

export default Lozenge;

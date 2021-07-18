import styles from './Backdrop.module';
import PropTypes from 'prop-types';

const Backdrop = ({isOpen, dimBackground, onClick, onDrag, title}) => {
  return (
    <div
      className={`${styles.backdrop} ${dimBackground && styles.dim} ${
        isOpen ? styles.open : ''
      }`}
      onClick={onClick}
      onDrag={onDrag}
    >
      {title}
    </div>
  );
}

Backdrop.propTypes = {
  isOpen: PropTypes.bool,
  dimBackground: PropTypes.bool,
  onClick: PropTypes.func,
  onDrag: PropTypes.func
};

Backdrop.defaultProps = {
  isOpen: false,
  dimBackground: false,
};

export default Backdrop;


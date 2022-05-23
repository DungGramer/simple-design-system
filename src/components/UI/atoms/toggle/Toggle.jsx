import styles from './Toggle.module';
import PropTypes from 'prop-types';

const Toggle = ({ checked, onClick }) => {
  return (
    <input
      type="radio"
      onClick={onClick}
      checked={checked}
      onChange={onClick}
      className={styles['toggle']}
    />
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;

import styles from './ToggleButton.module';
import PropTypes from 'prop-types';
import Toggle from '@atoms/toggle/Toggle';

const ToggleButton = ({ iconFalse, iconTrue, checked, onClick }) => {
  return (
    <label className={styles['toggle-button']}>
      <Toggle checked={checked} onClick={onClick} />
      <i className={styles['toggle-status']} />
      {iconFalse && <i className={`${iconFalse} ${styles['icon-false']}`} />}
      {iconTrue && <i className={`${iconTrue} ${styles['icon-true']}`} />}
    </label>
  );
};

ToggleButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  iconFalse: PropTypes.string,
  iconTrue: PropTypes.string,
};


export default ToggleButton;

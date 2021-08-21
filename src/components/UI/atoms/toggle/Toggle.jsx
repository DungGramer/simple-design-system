import styles from './Toggle.module';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const Toggle = ({ iconFalse, iconTrue, checked, onClick }) => {
  const radioRef = useRef(null);

  return (
    <label className={styles['toggle-container']}>
      <input
        ref={radioRef}
        type="radio"
        onClick={onClick}
        checked={checked}
        onChange={onClick}
        className={styles['toggle']}
      />
      <i className={styles['toggle-button']} />
      {iconFalse && <i className={`${iconFalse} ${styles['icon-false']}`} />}
      {iconTrue && <i className={`${iconTrue} ${styles['icon-true']}`} />}
    </label>
  );
};

Toggle.propTypes = {
  iconFalse: PropTypes.string,
  iconTrue: PropTypes.string,
};

Toggle.defaultProps = {
  iconFalse: 'fas fa-times',
  iconTrue: 'fas fa-check',
};

export default Toggle;

import styles from './Range.module';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Range = ({
  min,
  max,
  step,
  onChange,
  disabled,
  defaultValue,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange();
  };

  return (
    <input
      className={styles['range']}
      style={{
        '--range-inline-width': `${value}%`,
      }}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      disabled={disabled}
      value={defaultValue}
      {...props}
    />
  );
};

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
};

export default Range;

import styles from './TextField.module';
import PropTypes from 'prop-types';

const TextField = ({
  isDisabled,
  isReadOnly,
  isRequired,
  name,
  placeholder,
  width,
  onChange,
  maxLength,
  ...props
}) => {
  return (
    <input
      className={styles['text-field']}
      disabled={isDisabled}
      name={name}
      placeholder={placeholder}
      readOnly={isReadOnly}
      required={isRequired}
      type="text"
      style={{ width }}
      onChange={onChange}
      maxLength={maxLength}
      {...props}
    />
  );
};

TextField.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.number,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
};

export default TextField;

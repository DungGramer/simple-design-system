import styles from './Checkbox.module';
import PropTypes from 'prop-types';

const Checkbox = ({
  id,
  disabled,
  size,
  onClick,
  onChange,
  children,
  ...props
}) => {
  return (
    <div
      className={`${styles.checkbox} ${styles[size]} ${
        disabled ? styles.disabled : ''
      }`}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        onClick={onClick}
        onChange={onChange || onClick}
        {...props}
      />
      <label htmlFor={id}>
        <svg viewBox="0 0 100 100">
          <path
            className={styles.box}
            d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
          />
          <polyline
            className={styles.check}
            points="25.5,53.5 39.5,67.5 72.5,34.5 "
          />
        </svg>
        <span>{children}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  size: 'small',
};

export default Checkbox;

import styles from './Radio.module';
import PropTypes from 'prop-types';

const Radio = ({ name, children, disabled, appearance, onChange, ...rest }) => {
  if (appearance === 'chips')
    return (
      <ChipsRadio
        name={name}
        disabled={disabled}
        onChange={onChange}
        appearance={appearance}
        {...rest}
      >
        {children}
      </ChipsRadio>
    );
  return (
    <label
      className={`${styles['radio']} ${styles[appearance]} ${
        disabled ? styles['disabled'] : ''
      }`}
    >
      <span className={styles['radio-input']}>
        <input
          type="radio"
          name={name}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <span className={styles['radio-control']} />
      </span>
      <span className={styles.label}>{children}</span>
    </label>
  );
};

const ChipsRadio = ({
  name,
  children,
  disabled,
  appearance,
  onChange,
  ...rest
}) => {
  return (
    <label
      className={`${styles['radio']} ${styles[appearance]} ${
        disabled ? styles['disabled'] : ''
      }`}
    >
      <input
        type="radio"
        name={name}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.label}>{children}</span>
    </label>
  );
};

const RadioGroup = ({ name, children, onChange, appearance }) => {
  return (
    <div className={styles['radio-group']}>
      {children.map((radio, index) => {
        return (
          <Radio
            key={index}
            name={name}
            appearance={appearance}
            onChange={onChange}
            {...radio.props}
          >
            {radio.props.children}
          </Radio>
        );
      })}
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  appearance: PropTypes.oneOf(['chips']),
  onChange: PropTypes.func,
};

Radio.Group = RadioGroup;
export default Radio;

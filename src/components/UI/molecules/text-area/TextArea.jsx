import styles from './TextArea.module';
import PropTypes from 'prop-types';

const TextArea = ({
  resize,
  isDisabled,
  isReadOnly,
  isRequired,
  maxHeight,
  defaultValue,
  spellCheck,
  ...props
}) => {
  return (
    <textarea
      className={styles['text-area']}
      style={{ resize, maxHeight }}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      defaultValue={defaultValue}
      spellCheck={spellCheck}
      {...props}
    />
  );
};

TextArea.propTypes = {
  resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical', 'auto']),
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  maxHeight: PropTypes.number,
  defaultValue: PropTypes.string,
  spellCheck: PropTypes.bool,
};

export default TextArea;

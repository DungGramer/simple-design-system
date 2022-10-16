import styles from './Spinner.module';
import PropTypes from 'prop-types';
import Icon from '@atoms/icon/Icon';
import { ImSpinner8 } from 'react-icons/im';

const sizeConverter = (size) => {
  if (typeof size === 'number') return size;

  switch (size) {
    case 'xsmall':
      return 8;
    case 'small':
      return 16;
    case 'medium':
      return 24;
    case 'large':
      return 48;
    case 'xlarge':
      return 96;
    default:
      return 16;
  }
};

const Spinner = ({ size }) => {
  return (
    <div className={styles['spinner']}>
      <Icon icon={<ImSpinner8 />} animation="spin" size={sizeConverter(size)} />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
};

Spinner.defaultProps = {
  size: 'small',
};

export default Spinner;

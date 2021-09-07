import styles from './ButtonPage.module';
import PropTypes from 'prop-types';
import Button from '@atoms/button/Button';

const ButtonPage = ({}) => {
  return <div className={styles['button-page']}>
    <Button />
  </div>;
}

ButtonPage.propTypes = {};

export default ButtonPage;

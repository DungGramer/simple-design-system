import styles from './Tab.module';
import PropTypes from 'prop-types';

function Tab({ onClick, title, active }) {
  return (
    <li
      className={`${styles['tab-list-item']} ${
        active ? styles['tab-list-active'] : ''
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  );
}

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default Tab;

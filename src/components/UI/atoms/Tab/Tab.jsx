import styles from './Tab.module';
import PropTypes from 'prop-types';

function Tab({ activeTab, index, onClick, title, active }) {
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

Tab.propTypes = {};

export default Tab;

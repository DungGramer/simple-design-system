import styles from './Tab.module';
import PropTypes from 'prop-types';

/**
 * @memberof Tabs
 * @description Tab component for Tabs
 *
 * @param {function} onClick - function to call when tab is clicked
 * @param {string} title - Title of the tab
 * @param {boolean} active - Is the tab active
 **/
function Tab({ onClick, title, active, onKeyDown }) {
  return (
    <li
      className={`${styles['tab-list-item']} ${active ? styles['tab-list-active'] : ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex="0"
    >
      {title}
    </li>
  );
}

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onKeyDown: PropTypes.func,
};

export default Tab;

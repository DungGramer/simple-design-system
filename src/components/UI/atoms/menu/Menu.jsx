import styles from './Menu.module';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Menu component
 * @memberof Atoms
 *
 * @param {string} content - The content of the menu
 * @param {string} href - The href using <a> tag
 * @param {string} to - The href using <Link> tag
 *
 * @example
 * <Menu content="Home" to="/">
 * */

const Menu = ({ content, href, to, onClick }) => {
  return (
    <li className={styles['menu']}>
      {href ? (
        <a href={href} onClick={onClick}>
          {content}
        </a>
      ) : to ? (
        <Link to={to} onClick={onClick}>
          {content}
        </Link>
      ) : (
        <span onClick={onClick}>{content}</span>
      )}
    </li>
  );
};

Menu.propTypes = {
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default Menu;

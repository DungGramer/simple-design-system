import styles from './Menu.module';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({ content, href, to }) => {
  return (
    <li className={styles['menu']}>
      {href ? (
        <a href={href}>{content}</a>
      ) : to ? (
        <Link to={to}>{content}</Link>
      ) : (
        content
      )}
    </li>
  );
};

Menu.propTypes = {};

export default Menu;

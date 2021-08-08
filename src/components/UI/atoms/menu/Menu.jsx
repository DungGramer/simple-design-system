import styles from './Menu.module';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({content, href}) => {
  return (
    <li className={styles['menu']}>
      {href ? <Link to={href}>{content}</Link> : content}
    </li>
  );
}

Menu.propTypes = {};

export default Menu;

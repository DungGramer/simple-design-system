import styles from './Header.module';
import PropTypes from 'prop-types';
import Logo from '@public/assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = () => {
  const paths = [
    {
      location: '/components',
      name: 'Components',
    },
    {
      location: '/blog',
      name: 'Blog',
    },
  ];
  return (
    <ul>
      {paths.map(path => (
        <li key={path.name}>
          <NavLink to={path.location} activeClassName={styles.active}>
            {path.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo width="50" height="50" />
          </Link>
        </div>

        <nav className={styles['nav-links']}>
          <NavLinks />
        </nav>
        <i className="fal fa-bars"></i>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

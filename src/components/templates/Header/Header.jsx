import styles from './Header.module';
import PropTypes from 'prop-types';
import Logo from '@public/assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {
  const [open, setOpen] = useState(false);

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
      <ul className={`${styles['nav-list']} ${open ? styles.open : ''}`}>
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo width="50" height="50" />
          </Link>
          <i
            className={`${styles.menu} far fa-bars`}
            onClick={() => setOpen(!open)}
          />
        </div>

        <nav className={styles['nav-container']}>
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

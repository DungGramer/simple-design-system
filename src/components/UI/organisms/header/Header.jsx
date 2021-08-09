import styles from './Header.module';
import PropTypes from 'prop-types';
import Logo from '@public/assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Backdrop from '@atoms/backdrop/Backdrop';
import useMediaQuery from '@components/hooks/useMediaQuery';
import breakpoint from '~/constants/mediaQuery';

function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const maxDesktop = useMediaQuery(breakpoint.m_desktop);

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
    <header id="header" className={styles.header}>
      <Backdrop
        isOpen={open}
        onClick={toggleOpen}
        onDrag={toggleOpen}
        condition={maxDesktop}
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo width="50" height="50" />
          </Link>
          <i className={`${styles.menu} far fa-bars`} onClick={toggleOpen} />
        </div>

        <nav className={styles['nav-container']} onClick={toggleOpen}>
          <ul className={`${styles['nav-list']} ${open ? styles.open : ''}`}>
            {paths.map(path => (
              <li key={path.name}>
                <NavLink to={path.location} activeClassName={styles.active}>
                  {path.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
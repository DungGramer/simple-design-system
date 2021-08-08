import Backdrop from '@atoms/backdrop/Backdrop';
import useMediaQuery from '@components/hooks/useMediaQuery';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import breakpoint from '~/constants/mediaQuery';
import components from '~/routes/components';

import styles from './Sidebar.module';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const openClass = open ? styles.open : '';

  const toggleOpen = () => setOpen(!open);
  const maxDesktop = useMediaQuery(breakpoint.m_desktop);


  return (
    <aside className={`${styles.sidebar} ${openClass}`}>
      <Backdrop
        isOpen={open}
        onClick={toggleOpen}
        onDrag={toggleOpen}
        condition={maxDesktop}
        dimBackground
      />

      <div
        role="button"
        className={`${styles['aside-burger']} ${openClass}`}
        aria-label="menu"
        aria-expanded="false"
        onClick={toggleOpen}
      >
        <div className={styles.item} aria-hidden="true"></div>
      </div>
      <ul onClick={toggleOpen}>
        {components.map(({ title, path }) => (
          <li key={title}>
            <NavLink
              className={styles['nav-item']}
              to={path}
              activeClassName={styles.active}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

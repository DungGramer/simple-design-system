import Backdrop from '@atoms/backdrop/Backdrop';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import components from '~/routes/components';

import styles from './Sidebar.module';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const openClass = open ? styles.open : '';
  const toggleOpen = () => setOpen(!open);

  return (
    <aside className={`${styles.sidebar} ${openClass}`}>
      <Backdrop
        isOpen={open}
        onClick={toggleOpen}
        onDrag={toggleOpen}
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

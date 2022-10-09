import Backdrop from '@atoms/backdrop/Backdrop';
import useMediaQuery from '@components/hooks/useMediaQuery';
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import breakpoint from '~/constants/mediaQuery';
import components from '~/routes/components.route';

import styles from './Sidebar.module';

const Sidebar = () => {
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
        disableScroll
      />
      <div
        role="button"
        className={`${styles['aside-burger']} ${openClass}`}
        aria-label="menu"
        aria-expanded="false"
        onClick={toggleOpen}
      >
        <div className={styles['icon-menu']} aria-hidden="true" />
      </div>
      <ul onClick={toggleOpen} className={styles['aside-list']}>
        {components.map(({ title, path }) => (
          <li key={title}>
            <NavLink
              to={path}
              className={(navData) => `${styles['nav-item']} ${navData.isActive ? styles.active : ''}`}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default memo(Sidebar);

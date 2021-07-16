import { NavLink } from 'react-router-dom';
import components from '~/routes/components';

import styles from './Sidebar.module';

export const Sidebar = () => {
  return (
    <aside className={styles.nav}>
      {components.map(({ title, path }) => (
        <NavLink
          className={styles['nav-item']}
          to={path}
          key={title}
          activeClassName={styles.active}
        >
          {title}
        </NavLink>
      ))}
    </aside>
  );
};

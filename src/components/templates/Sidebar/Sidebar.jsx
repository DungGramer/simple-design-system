import React from 'react'
import { Link } from 'react-router-dom';
import components from '~/routes/components';
import styles from './Sidebar.module';

export const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      {components.map(({ title, path }) => (
        <Link className={styles['nav-item']} to={path} key={title}>
          {title}
        </Link>
      ))}
    </nav>
  );
}

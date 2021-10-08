import styles from './Breadcrumb.module';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const BreadcrumbContext = createContext();
const useBreadcrumbContext = () => {
  return useContext(BreadcrumbContext);
};

const Breadcrumb = ({ children, separator }) => {

  return (
    <BreadcrumbContext.Provider value={{
      separator
    }}>
      <nav className={styles['breadcrumb']}>
        <ol className={styles['breadcrumb-list']}>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

const BreadcrumbItem = ({ children, href, active }) => {
  const { separator } = useBreadcrumbContext();
  return (
    <li className={`${styles['breadcrumb-item']} ${active ? styles['active'] : ''}`}>
      <a href={href}>{children}</a>
      <span className={styles.separator}>{separator}</span>
    </li>
  );
};

Breadcrumb.propTypes = {
  separator: PropTypes.string
};
Breadcrumb.defaultProps = {
  separator: '/'
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;

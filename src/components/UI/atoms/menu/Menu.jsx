import styles from './Menu.module';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isURL } from '~/constants/validates';

/**
 * Menu component
 * @memberof Atoms
 *
 * @param {string} content - The content of the menu
 * @param {string} href - The href using <a> tag
 * @param {string} to - The href using <Link> tag
 *
 * @example
 * <Menu content="Home" to="/">
 * */

const Menu = ({ content, icon, href, to, onClick }) => {
  const Wrapper = () => {
    if (to) {
      return <Link to={to}>{content}</Link>;
    } else if (href) {
      return <a href={href}>{content}</a>;
    }
    return <span onClick={onClick}>{content}</span>;
  };

  const Icon = () => {
    if (isURL(icon)) {
      return <img src={icon} alt="avatar" />;
    }
    return <i className={`${icon}`} />;
  };


  return (
    <li className={styles['menu']}>
      <Wrapper>
        {icon && <Icon />}
        {content && <span>{content}</span>}
      </Wrapper>
    </li>
  );
};

Menu.propTypes = {
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default Menu;

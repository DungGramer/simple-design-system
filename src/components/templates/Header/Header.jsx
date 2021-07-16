import './Header.module';
import PropTypes from 'prop-types';
import Logo from '@public/assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div>
        <div className="logo">
          <Link to="/">
            <Logo width="50" height="50" />
          </Link>
        </div>

        <nav className="nav-links">
          <li>
            <Link to="/">Design System</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

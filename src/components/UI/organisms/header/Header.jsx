import styles from './Header.module';
import PropTypes from 'prop-types';
import Logo from '@public/assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import Backdrop from '@atoms/backdrop/Backdrop';
import useMediaQuery from '@components/hooks/useMediaQuery';
import breakpoint from '~/constants/mediaQuery';
import Dropdown from '@atoms/dropdown/Dropdown';
import Menu from '@atoms/menu/Menu';
import changeLanguage from '~/translations/changeLanguage';
import { useTranslation } from 'react-i18next';
import ChangeTheme from './change-theme/ChangeTheme';

const languages = [
  {
    name: 'English',
    key: 'en',
  },
  {
    name: 'Tiếng Việt',
    key: 'vi',
  },
];

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

const LogoSection = ({ toggleOpen }) => (
  <div className={styles.logo}>
    <Link to="/">
      <Logo width="50" height="50" />
    </Link>
    <ChangeTheme />
    <i className={`${styles.menu} far fa-bars`} onClick={toggleOpen} />
  </div>
);

const Languages = ({t}) => {
  const languageRef = useRef(null);
  const [openLang, setOpenLang] = useState(false);

  const toggleOpenLang = () => setOpenLang(!openLang);

  const languagesDropdown = (
    <>
      {languages.map(language => (
        <Menu
          content={language.name}
          key={language.key}
          onClick={() => {
            changeLanguage(language.key);
            toggleOpenLang();
            toggleOpen();
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <span
        className={styles.language}
        ref={languageRef}
        onClick={() => setOpenLang(!openLang)}
      >
        {t('Language')}
      </span>
      <Dropdown
        parentRef={languageRef}
        overlay={languagesDropdown}
        isOpen={openLang}
        onClick={toggleOpenLang}
        direction="right"
      />
    </>
  );
};

function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => maxDesktop && setOpen(!open);


  const maxDesktop = useMediaQuery(breakpoint.m_desktop);

  const { t } = useTranslation();

  return (
    <header id="header" className={styles.header}>
      <Backdrop
        isOpen={open}
        onClick={toggleOpen}
        onDrag={toggleOpen}
        condition={maxDesktop}
      />
      <div className={styles.container}>
        <LogoSection toggleOpen={toggleOpen} />

        <nav className={styles['nav-container']}>
          <ul className={`${styles['nav-list']} ${open ? styles.open : ''}`}>
            {paths.map(path => (
              <li key={path.name}>
                <NavLink
                  to={path.location}
                  onClick={toggleOpen}
                  activeClassName={styles.active}
                >
                  {t(path.name)}
                </NavLink>
              </li>
            ))}
            <li>
              <Languages t={t} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

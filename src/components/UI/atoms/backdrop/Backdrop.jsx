import styles from './Backdrop.module';
import PropTypes from 'prop-types';
import useMediaQuery from '@components/custom-hook/useMediaQuery';
import breakpoint from '~/constants/mediaQuery';

/**
 * Gray background for modal, sidebar, etc.
 *
 * @param {Boolean} isOpen - Show or hide the backdrop
 * @param {Boolean} dimBackground - Dim the background
 * @param {Function} onClick - Callback function
 * @param {Function} onDrag - Callback function
 *
 * @example
 *  <Backdrop isOpen={open} onClick={toggleOpen} onDrag={toggleOpen} />
 */
const Backdrop = ({ isOpen, dimBackground, onClick, onDrag }) => {
  let maxDesktop = useMediaQuery(breakpoint.m_desktop);

  return (
    <>
      {maxDesktop && (
        <div
          className={`${styles.backdrop} ${dimBackground && styles.dim} ${
            isOpen ? styles.open : ''
          }`}
          onClick={onClick}
          onDrag={onDrag}
        />
      )}
    </>
  );
};

Backdrop.propTypes = {
  isOpen: PropTypes.bool,
  dimBackground: PropTypes.bool,
  onClick: PropTypes.func,
  onDrag: PropTypes.func,
};

Backdrop.defaultProps = {
  isOpen: false,
  dimBackground: false,
};

export default Backdrop;

import styles from './Backdrop.module';
import PropTypes from 'prop-types';
import useMediaQuery from '@components/hooks/useMediaQuery';
import breakpoint from '~/constants/mediaQuery';

/**
 * Gray background for modal, sidebar, etc.
 *
 * @param {Boolean} isOpen - Show or hide the backdrop
 * @param {Boolean} dimBackground - Dim the background
 * @param {Function} onClick - Callback function
 * @param {Function} onDrag - Callback function
 * @param {useMediaQuery} condition - Condition to show the backdrop
 *
 * @example
 *  <Backdrop isOpen={open} onClick={toggleOpen} onDrag={toggleOpen} condition={maxDesktop} dimBackground />
 */
const Backdrop = ({ isOpen, dimBackground, onClick, onDrag, condition, zIndex, disableScroll }) => {
  const bodyStyle = document.body.style;
  if (condition && isOpen && disableScroll) {
    bodyStyle.overflow = 'hidden';
    bodyStyle.marginRight = '0.5rem';
  } else {
    bodyStyle.overflow = 'auto';
    bodyStyle.marginRight = '0';
  }

  return (
    <>
      {condition && (
        <div
          className={`${styles.backdrop} ${dimBackground && styles.dim} ${
            isOpen ? styles.open : ''
          }`}
          onClick={onClick}
          onDrag={onDrag}
          style={{ zIndex }}
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
  zIndex: PropTypes.number,
};

Backdrop.defaultProps = {
  isOpen: false,
  dimBackground: false,
  condition: true,
  zIndex: -1,
};

export default Backdrop;

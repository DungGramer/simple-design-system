import styles from './Dropdown.module';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import getLocation from '~/constants/useGetLocation';
import Backdrop from '@atoms/backdrop/Backdrop';
import boxModel from '~/constants/boxModel';

/**
 * DropDown
 * @memberof atoms
 * @param {HTMLElement} overlay - The list of items to be displayed
 * @param {HTMLElement} parentRef - The parent element to be used for positioning
 * @param {Boolean} isOpen - Whether the dropdown is open or not
 * @param {Function} onClick - The callback function to be called when the dropdown is clicked
 *
 * @example
 * <Dropdown parentRef={btnRef} overlay={menu} onClick={toggleOpen} isOpen={open} />
 *
 * */

const Dropdown = ({ overlay, parentRef, isOpen, onClick, direction }) => {
  const dropdownRef = useRef();

  const setVisible = () => {
    if (dropdownRef.current && parentRef.current) {
      const dropdownStyle = dropdownRef.current.style;

      dropdownStyle.opacity = 1;

      // Set position relative to the parent
      parentRef.current.style.position = 'relative';
    }
  };

  const handleScroll = () => {
    if (dropdownRef.current && parentRef.current) {
      const { spaceTop, spaceBottom } = getLocation(parentRef);
      const { size } = boxModel(parentRef.current);
      const dropdownStyle = dropdownRef.current.style;

      if (spaceTop > spaceBottom) {
        dropdownStyle.top = 'auto';
        dropdownStyle.bottom = `100%`;
        dropdownStyle.maxHeight = `${spaceTop - 20}px`;
      } else {
        dropdownStyle.top = '100%';
        dropdownStyle.bottom = 'auto';
        dropdownStyle.maxHeight = `${spaceBottom - 20}px`;
      }
    }
  };

  useEffect(() => {
    setVisible();
    handleScroll();

    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={styles['dropdown']}>
      <Backdrop isOpen={isOpen} onClick={onClick} onDrag={onClick} zIndex={1} />
      {isOpen && (
        <ul
          ref={dropdownRef}
          className={`${styles['dropdown-container']} ${styles[direction]} `}
        >
          {overlay}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  overlay: PropTypes.node.isRequired,
  parentRef: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
};

Dropdown.defaultProps = {
  direction: 'left',
};

export default Dropdown;

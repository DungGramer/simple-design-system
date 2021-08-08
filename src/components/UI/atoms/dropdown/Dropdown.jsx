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

const Dropdown = ({ overlay, parentRef, isOpen, onClick }) => {
  const dropdownRef = useRef();

  const setUp = () => {
    if (dropdownRef.current && parentRef.current) {
      const dropdownStyle = dropdownRef.current.style;
      dropdownStyle.opacity = 1;

      // Set position relative to the parent
      parentRef.current.style.position = 'relative';
    }
  };

  const scrollHandle = () => {
    if (dropdownRef.current && parentRef.current) {
      const { spaceTop, spaceBottom, maxSpaceHorizontal } = getLocation(parentRef);
      const { size } = boxModel(parentRef.current);
      const dropdownStyle = dropdownRef.current.style;

      if (spaceTop > spaceBottom) {
        dropdownStyle.bottom = `calc(100% + ${size.maxHeight}px)`;
        dropdownStyle.top = 'auto';
      } else {
        dropdownStyle.top = '100%';
        dropdownStyle.bottom = 'auto';
      }

      dropdownStyle.maxHeight = `${maxSpaceHorizontal - 20}px`;
    }
  };

  useEffect(() => {
    setUp();
    scrollHandle();

    if (isOpen) {
      window.addEventListener('mousewheel', scrollHandle);
    }

    return () => {
      window.removeEventListener('mousewheel', scrollHandle);
    };
  }, [isOpen]);

  return (
    <div className={styles['dropdown']}>
      <Backdrop isOpen={isOpen} onClick={onClick} onDrag={onClick} zIndex={1} />
      {isOpen && (
        <ul ref={dropdownRef} className={styles['dropdown-container']}>
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
};

export default Dropdown;

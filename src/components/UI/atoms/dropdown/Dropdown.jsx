import styles from './Dropdown.module';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import getLocation from '~/constants/useGetLocation';
import Backdrop from '@atoms/backdrop/Backdrop';
import boxModel from '~/constants/boxModel';

/**
 * DropDown
 * @memberof atoms
 *
 * @param {Object} props
 * @param {HTMLElement} props.overlay - The list of items to be displayed
 * @param {HTMLElement} props.parentRef - The parent element to be used for positioning
 * @param {Boolean} props.isOpen - Whether the dropdown is open or not
 * @param {Function} props.onClick - The callback function to be called when the dropdown is clicked
 * @param {String} props.direction - The direction of the dropdown
 * @param {String} props.maxHeight - The max height of the dropdown
 *
 * @example
 * <Dropdown parentRef={btnRef} overlay={menu} onClick={toggleOpen} isOpen={open} />
 *
 * */

const Dropdown = ({ overlay, parentRef, isOpen, onClick, direction, maxHeight }) => {
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
        dropdownStyle.maxHeight = `min(${spaceTop - 20}px, ${maxHeight})`;
      } else {
        dropdownStyle.top = '100%';
        dropdownStyle.bottom = 'auto';
        dropdownStyle.maxHeight = `min(${spaceBottom - 20}px, ${maxHeight})`;
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
  maxHeight: PropTypes.string,
};

Dropdown.defaultProps = {
  direction: 'left',
  maxHeight: '500px',
};

export default Dropdown;

import styles from './Dropdown.module';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import getLocation from '~/constants/useGetLocation';
import Backdrop from '@atoms/backdrop/Backdrop';
import boxModel from '~/constants/boxModel';

const Dropdown = ({ overlay, parentRef, isOpen, onClick }) => {
  const dropdownRef = useRef();

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    const scrollHandle = () => {
      if (dropdownRef.current && parentRef.current) {
        const { spaceTop, spaceBottom, maxSpaceHorizontal } =
          getLocation(parentRef);
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
        dropdownStyle.opacity = 1;
      }
    };
    scrollHandle();

    isOpen && window.addEventListener('scroll', scrollHandle);

    return () => {
      window.removeEventListener('scroll', scrollHandle);
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

Dropdown.propTypes = {};

export default Dropdown;

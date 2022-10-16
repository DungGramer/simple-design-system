import styles from './Modal.module';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import useToggle from '@components/hooks/useToggle';
import Backdrop from '@atoms/backdrop/Backdrop';
import Button from '@atoms/button/Button';
import Icon from '@atoms/icon/Icon';

const Modal = ({ children, visible, handleClose, strictClose }) => {
  return (
    <ModalContext.Provider
      value={{
        visible,
        handleClose,
      }}
    >
      <article className={`${styles.modal} ${visible ? styles.open : ''}`}>
        {strictClose ? (
          <Backdrop dimBackground isOpen={visible} />
        ) : (
          <Backdrop isOpen={visible} onClick={handleClose} onDrag={handleClose} dimBackground />
        )}
        <div className={styles.wrapper}>
          <div className={styles.container}>{children}</div>
        </div>
      </article>
    </ModalContext.Provider>
  );
};

const ModalHeader = ({ children, closeButton }) => {
  const { handleClose } = useContext(ModalContext);
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{children}</h2>
      {closeButton && (
        <span className={styles.closeButton} onClick={handleClose}>
          <Icon icon="far fa-times" fullWidth cursor="pointer" />
        </span>
      )}
    </div>
  );
};

const ModalBody = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

const ModalFooter = ({ children, onOk, onCancel, okText, cancelText }) => {
  const { handleClose } = useContext(ModalContext);

  if (children) return <div className={styles.footer}>{children}</div>;
  return (
    <div className={`${styles.footer} ${styles['footer-template']}`}>
      <Button
        onClick={onCancel || handleClose}
        className={styles.cancelButton}
        title={cancelText}
      />
      <Button onClick={onOk} className={styles.okButton} title={okText} type="primary" />
    </div>
  );
};

export const ModalContext = createContext();
export const useModalContext = () => {
  return useContext(ModalContext);
};

Modal.propTypes = {};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;

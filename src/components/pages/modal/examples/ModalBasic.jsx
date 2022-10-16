import Button from '@atoms/button/Button';
import Modal from '@molecules/modal/Modal';
import { useState, useCallback } from 'react';

const ModalBasic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button title="Open Modal" onClick={openModal} />
      <Modal visible={isOpen} handleClose={closeModal}>
        <Modal.Header closeButton>Confirm Navigation</Modal.Header>
        <Modal.Body>
          <p>You haven't finished your post yet. Do you want to leave without finishing?</p>
          <p>Are you sure you want to leave this page?</p>
        </Modal.Body>
        <Modal.Footer
          okText="Leave this Page"
          cancelText="Stay on this Page"
          onOk={closeModal}
          onCancel={closeModal}
        />
      </Modal>
    </>
  );
};

export default ModalBasic;

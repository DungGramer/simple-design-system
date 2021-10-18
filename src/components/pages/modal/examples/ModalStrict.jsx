import Button from '@atoms/button/Button';
import Modal from '@molecules/modal/Modal';
import { useState, useCallback } from 'react';

const ModalStrict = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button title="Open Modal" onClick={openModal} />

      <Modal visible={isOpen} handleClose={closeModal} strictClose>
        <Modal.Header>Notification</Modal.Header>
        <Modal.Body>
          <p>Update is successful</p>
        </Modal.Body>
        <Modal.Footer>
          <Button title="Close" onClick={closeModal} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalStrict;

import React from 'react';
import './Modal.css';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

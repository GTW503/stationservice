import React from 'react';
import './Modale.css';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modale: React.FC<ModalProps> = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modale;

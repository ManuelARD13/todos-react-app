import React from 'react';
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className='modalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
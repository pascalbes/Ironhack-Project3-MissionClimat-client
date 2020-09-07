import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "styles/Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div id="modal" className="modal-parent">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
        {/* <button onClick={()=>closeModal()} className="ok-btn">Ok</button> */}
      </div>
    </div>
  );
};

export default Modal;

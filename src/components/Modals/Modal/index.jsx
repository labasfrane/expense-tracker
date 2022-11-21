import { useEffect } from "react";
import { createPortal } from "react-dom";
import { faX } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index";

import "./index.scss";

const Modal = ({ children, stateHandler }) => {
  const modalContainer = document.getElementById("modal-root");

  const close = () => {
    stateHandler(false);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        close();
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    console.log("handler", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const Modal = (
    <div className="modal-containter" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon className="modal__close" icon={faX} onClick={close} />
        {children}
      </div>
    </div>
  );

  return createPortal(Modal, modalContainer);
};

export default Modal;

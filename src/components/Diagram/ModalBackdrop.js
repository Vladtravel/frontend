import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "../../components/Diagram/ModalBackdrop.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalBackdrop = ({ onClose, children, ...allyProps }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleOverlayClick} {...allyProps}>
      {children}
    </div>,
    modalRoot
  );
};

ModalBackdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalBackdrop;

import { FC } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button className={styles.modalButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholderText: string;
  id: string;
}

const Input: FC<InputProps> = ({ type, placeholderText, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>
        {id}
      </label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholderText}
        id={id}
      />
    </div>
  );
};

export default Input;

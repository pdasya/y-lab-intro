import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholderText: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  placeholderText,
  id,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>
        {id}
      </label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholderText}
        value={value}
        id={id}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;

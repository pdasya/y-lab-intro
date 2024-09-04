import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholderText: string;
}

const Input: FC<InputProps> = ({ type, placeholderText }) => {
  return (
    <input type={type} className={styles.input} placeholder={placeholderText} />
  );
};

export default Input;

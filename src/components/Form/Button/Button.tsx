import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  buttonText: string;
}

const Button: FC<ButtonProps> = ({ buttonText }) => {
  return <button className={styles.searchButton}> {buttonText}</button>;
};

export default Button;

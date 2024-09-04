import { FC } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./Form.module.scss";

const Form: FC = () => {
  return (
    <>
      <form className={styles.formWrapper}>
        <h2 className={styles.header}>Sign In</h2>
        <Input type="email" placeholderText="example@domen.com" />
        <Input type="password" placeholderText="password" />
        <Button buttonText="Submit" />
      </form>
    </>
  );
};

export default Form;

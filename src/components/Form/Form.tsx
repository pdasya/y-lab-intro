import { FC } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./Form.module.scss";

const Form: FC = () => {
  return (
    <>
      <form className={styles.formWrapper}>
        <h2 className={styles.header}>Sign In</h2>
        <Input type="email" placeholderText="Example@domen.com" id={"Email"} />
        <Input type="password" placeholderText="Password" id={"Password"} />
        <Button buttonText="Submit" />
      </form>
    </>
  );
};

export default Form;

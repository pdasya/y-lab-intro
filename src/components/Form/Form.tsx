import { FC, FormEvent, useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./Form.module.scss";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import mockFetch, { MockResponse } from "@utils/mockFetch";

const Form: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response: MockResponse = await mockFetch(email, password);

      if (response.success) {
        setModalMessage("You are successfully logged in!");
      } else {
        setModalMessage(response.message || "An error occurred");
      }
    } catch (error) {
      setModalMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 className={styles.header}>Sign In</h2>
        <Input
          type="email"
          placeholderText="example@domen.com"
          value={email}
          id={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholderText="password"
          value={password}
          id={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button buttonText="Submit" />
      </form>
      {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Form;

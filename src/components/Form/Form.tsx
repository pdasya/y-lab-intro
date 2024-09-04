import { FC, FormEvent, useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./Form.module.scss";
import mockFetch, { MockResponse } from "../../utils/mockFetch";

const Form: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response: MockResponse = await mockFetch(email, password);

    if (response.success) {
      setMessage("Login successful!");
    } else {
      setMessage(response.message || "An error occurred");
    }
  };

  return (
    <>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 className={styles.header}>Sign In</h2>
        <Input
          type="email"
          placeholderText="Example@domen.com"
          id={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholderText="Password"
          id={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button buttonText="Submit" />
      </form>
      {message && <div className="message">{message}</div>}
    </>
  );
};

export default Form;

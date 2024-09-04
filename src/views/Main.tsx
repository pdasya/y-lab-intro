import { FC } from "react";
import Form from "../components/Form/Form";
import styles from "./Main.module.scss";

const Main: FC = () => {
  return (
    <main className={styles.mainWrapper}>
      <Form />
    </main>
  );
};

export default Main;

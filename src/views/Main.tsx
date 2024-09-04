import { FC } from "react";
import styles from "./Main.module.scss";
import "../App.scss";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form/Form";

const Main: FC = () => {
  return (
    <>
      <main className={styles.mainWrapper}>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Main;

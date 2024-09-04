import { FC } from "react";
import Form from "../components/Form/Form";
import styles from "./Main.module.scss";
import Footer from "../components/Footer/Footer";
import "../App.scss";

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

import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/pdasya" className={styles.footerGithub}>
        <img
          src="../../../public/github.png"
          alt="github image"
          className={styles.footerGithubImage}
        ></img>
        pdasya
      </a>
      <p className={styles.footerYear}>2024</p>
      <a href="https://university.ylab.io/" className={styles.footerYlab}>
        <img
          src="../../../public/ylab-university.png"
          alt="ylab image"
          className={styles.footerYlabImage}
        ></img>
      </a>
    </div>
  );
};

export default Footer;

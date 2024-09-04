import { FC } from "react";
import styles from "./Footer.module.scss";
import githubImage from "/github.png";
import ylabImage from "/ylab-university.png";

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/pdasya" className={styles.footerGithub}>
        <img
          src={githubImage}
          alt="github image"
          className={styles.footerGithubImage}
        ></img>
        pdasya
      </a>
      <p className={styles.footerYear}>2024</p>
      <a href="https://university.ylab.io/" className={styles.footerYlab}>
        <img
          src={ylabImage}
          alt="ylab image"
          className={styles.footerYlabImage}
        ></img>
      </a>
    </div>
  );
};

export default Footer;

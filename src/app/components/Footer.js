// components/Footer.js
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
        <p className={styles.footerPara} > © {new Date().getFullYear()} PRATIK KUMAR ROUT. <br/>
        All rights reserved.</p>
    </footer>
  );
}

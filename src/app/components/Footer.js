// components/Footer.js
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer_section}>
        <p className={styles.footer_para} > © {new Date().getFullYear()} PRATIK KUMAR ROUT. <br/>
        All rights reserved.</p>
    </footer>
  );
}

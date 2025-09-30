import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./AboutContact.module.css";

export default function AboutContact() {
    return (
        <section id="contact">
            <div className={styles.aboutContactContainer}>
                <div className={styles.about} >
                    <h2>About</h2>
                    <p className={styles.para}>I&apos;m a software developer specializing in scalable web and mobile apps with expertise in React, Next.js, Flutter, and Firebase.
                        I combine clean, minimal UI design with modular, future-ready architecture to deliver apps that are both elegant and high-performing.
                        With experience in software development and UI/UX, I bring clarity, precision, and creativity to every project I take on.</p>
                </div>
                <div className={styles.contact}>
                    <h2>Contact</h2>
                    <div>
                        <ul>
                            <li>Mail</li>
                            <li>Git hub</li>
                            <li>Linkedin</li>
                            <li>Insta</li>
                            <li>WhatsApp</li>
                            <li>Phone</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
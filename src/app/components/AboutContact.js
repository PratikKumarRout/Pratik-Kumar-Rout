import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./AboutContact.module.css";

export default function AboutContact() {
    return (
        <section id="contact" style={{

        }}>
            <div style={{
                maxWidth: "1200px",
                display: "flex",
                justifyContent: "space-between",
                gap: "5rem",
                alignItems: "center",
                margin: "auto",
                padding: "4rem",
                backgroundColor: "#e0e4ea",
                borderRadius: "20px"
            }}>
                <div style={{ flex: 1, placeItems: "center" }}>
                    <h2>About</h2>
                    <p className={styles.para}>I&apos;m a software developer specializing in scalable web and mobile apps with expertise in React, Next.js, Flutter, and Firebase.
                        I combine clean, minimal UI design with modular, future-ready architecture to deliver apps that are both elegant and high-performing.
                        With experience in software development and UI/UX, I bring clarity, precision, and creativity to every project I take on.</p>
                </div>
                <div style={{ flex: 1, placeItems: "center" }}>
                    <h2>Contact</h2>
                    <div style={{ display: "flex" }}>
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
import styles from "./AboutContact.module.css";

const contacts = [
    { label: "Email", url: "mailto:routpratikiven@gmail.com", icon: "📧" },
    { label: "GitHub", url: "https://github.com/PratikKumarRout", icon: "💻" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/pratikkumarrout", icon: "🔗" },
    { label: "Instagram", url: "https://www.instagram.com/pratikkumarrout09", icon: "📷" },
];

export default function AboutContact() {
    return (
        <section id="contact">
            <div className={styles.aboutContactContainer}>
                <div className={styles.about} >
                    <h2>About</h2>
                    <p className={styles.para}>
                        I&apos;m a software developer specializing in scalable web and mobile apps with expertise in React, Next.js, Flutter, and Firebase.
                        I combine clean, minimal UI design with modular, future-ready architecture to deliver apps that are both elegant and high-performing.
                        With experience in software development and UI/UX, I bring clarity, precision, and creativity to every project I take on.</p>
                </div>
                <div className={styles.contact}>
                    <h2>Contact Me</h2>
                    <p className={styles.para}>“Collaboration Starts with a Hello.” <br />
                        The best way to reach me is through email, but I&apos;m also available on other platforms.
                    </p>
                    <div>
                        {/* make a list of those contacts using map function */}
                        {contacts.map((contact, index) => (
                            <div key={index} className={styles.contactList}>
                                <a href={contact.url}>{contact.label}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
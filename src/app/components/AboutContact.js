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
                        I&apos;m Pratik Kumar Rout, a software developer passionate about creating scalable web and mobile applications that balance technical precision with clean, minimal design.
                        With expertise in React, Next.js, Flutter, and Firebase, I focus on modular architecture and future-ready solutions that are both elegant and high-performing.
                        <br /> My approach is methodical yet creative...
                        <br /> — from debugging complex logic to refining layouts with clarity and proportion
                        <br /> — always aiming to deliver apps that feel effortless to use and built to last.</p>
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
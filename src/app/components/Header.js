import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./Header.module.css"


const navLinks = [
    { label: "Home", anchor: "#home" },
    { label: "Skills", anchor: "#skills" },
    { label: "Projects", anchor: "#projects" },
    { label: "Contact", anchor: "#contact" },
];

export default function Header() {
    return (
        <header>
            <div className={styles.headerTitle}>
                <div className={styles.circleAvatar}>
                    PKR
                </div>
                <div className={styles.title}>
                    <h2>PRATIK KUMAR ROUT</h2>
                </div>
            </div>
            <nav>
                <div className={styles.navList}>
                    {navLinks.map((link) => (
                        <div key={link.anchor} className={styles.navItems}>
                            <a href={link.anchor}>{link.label}</a>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
}
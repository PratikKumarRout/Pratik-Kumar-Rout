import styles from "./Header.module.css"


const navLinks = [
    { label: "Home", anchor: "#hero" },
    { label: "Projects", anchor: "#projects" },
    { label: "Certificates", anchor: "#certificates" },
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
                        <a key={link.anchor} href={link.anchor} className={styles.navItems}>
                            <p>{link.label}</p>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
import styles from "./Header.module.css"


const navLinks = [
    { label: "Home", anchor: "#hero" },
    { label: "Projects", anchor: "#projects" },
    { label: "Certificates", anchor: "#certificates" },
    { label: "Contact", anchor: "#contact" },
];

export default function Header() {
    return (
        <header className={ styles.header1}>
            <div className={styles.header_title}>
                <div className={styles.circle_avatar}>
                    <p>PKR</p>
                </div>
                <div className={styles.title}>
                    <h2>PRATIK KUMAR ROUT</h2>
                </div>
            </div>
            <nav>
                <div className={styles.nav_list}>
                    {navLinks.map((link) => (
                        <a key={link.anchor} href={link.anchor} rel="noopner noreferrer" className={styles.nav_items}>
                            <p>{link.label}</p>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
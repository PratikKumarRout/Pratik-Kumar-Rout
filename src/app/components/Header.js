import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./Header.module.css"

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
            <div style={{
                display: "flex", gap: "1rem", paddingRight: "10px", alignItems: "center", color: "#fff"
            }}>
                <PlaceholderBox width="60px" height="20px" shade="#5c74ff" />
                <PlaceholderBox width="60px" height="20px" shade="#5c74ff" />
                <PlaceholderBox width="60px" height="20px" shade="#5c74ff" />
                <PlaceholderBox width="60px" height="20px" shade="#5c74ff" />
            </div>
        </header>
    );
}
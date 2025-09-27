import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function Header() {
    return (
        <header>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <PlaceholderCircle size="2.5rem" shade="var(--secondary)" />
                <PlaceholderBox width="300px" height="30px" shade="var(--secondary)" /> </div>
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
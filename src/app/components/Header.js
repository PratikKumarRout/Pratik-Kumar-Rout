import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function Header() {
    return (
            <header>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <PlaceholderCircle size="2.5rem" />
                    <PlaceholderBox width="300px" height="30px" shade="#666" /> </div>
                <div style={{
                    display: "flex", gap: "1rem"
                }}>
                    <PlaceholderBox width="60px" height="20px" shade="#888" />
                    <PlaceholderBox width="60px" height="20px" shade="#888" />
                    <PlaceholderBox width="60px" height="20px" shade="#888" />
                    <PlaceholderBox width="60px" height="20px" shade="#888" />
                </div>
            </header>
    );
}
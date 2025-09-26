import PlaceholderBox from "./PlaceholderBox";

export default function Header() {
    return (
        <header className="header">
            <PlaceholderBox width="100px" height="30px" shade="#666" />
            <div style={{
                display: "flex", gap: "1rem"

            }}>
                <PlaceholderBox width="60px" height="20px" shade="#888" />
                <PlaceholderBox width="60px" height="20px" shade="#888" />
                <PlaceholderBox width="60px" height="20px" shade="#888" />
            </div>
        </header>
    );
}
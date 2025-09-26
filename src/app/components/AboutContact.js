import PlaceholderBox from "./PlaceholderBox";

export default function AboutContact() {
    return (
        <section style={{
            backgroundColor: "#faf3e0",
            padding: "4rem 2rem",
            margin: "1rem",
            borderRadius: "20px"
        }}>
            <div className="container flex-row">
                <div style={{ flex: 1 }}>
                    <PlaceholderBox width="150px" height="30px" shade="#999" />
                    <PlaceholderBox width="100%" height="20px" shade="#999" />
                    <PlaceholderBox width="100%" height="15px" shade="#999" />
                    <PlaceholderBox width="60%" height="10px" shade="#999" />
                </div>
                <div style={{ flex: 1 }}>
                    <PlaceholderBox width="150px" height="30px" shade="#999" />
                    <PlaceholderBox width="100%" height="20px" shade="#888" />
                    <PlaceholderBox width="100%" height="15px" shade="#666" />
                    <PlaceholderBox width="80%" height="10px" shade="#999" />
                </div>
            </div>
        </section>
    );
}
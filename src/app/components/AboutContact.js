import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function AboutContact() {
    return (
        <section style={{

        }}>
            <div style={{
                maxWidth: "1200px",
                display: "flex",
                justifyContent: "space-between",
                gap: "5rem",
                alignItems: "center",
                margin: "auto",
                padding: "4rem",
                backgroundColor: "#e0e4ea",
                borderRadius: "20px"
            }}>
                <div style={{ flex: 1 }}>
                        <PlaceholderBox width="150px" height="40px" shade="#999" />
                        <PlaceholderBox width="100%" height="20px" shade="#999" />
                        <PlaceholderBox width="100%" height="15px" shade="#999" />
                        <PlaceholderBox width="60%" height="10px" shade="#999" />
                        <PlaceholderBox width="60%" height="10px" shade="#999" />
                    </div>
                <div style={{ flex: 1}}>
                    <PlaceholderBox width={150} height={40} shade="#bbb" />
                    <div style={{display: "flex" }}>
                    <PlaceholderCircle size={50} shade="var(--accent)" /> 
                    <PlaceholderCircle size={50} shade="var(--accent)"/>
                    <PlaceholderCircle size={50} shade="var(--accent)"/> 
                    </div>
                </div>
            </div>
        </section>
    );
}
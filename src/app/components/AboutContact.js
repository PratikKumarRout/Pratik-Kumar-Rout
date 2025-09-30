import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function AboutContact() {
    return (
        <section id="contact" style={{

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
                    <span>About</span>
                    <p>I&apos;m a software developer specializing in scalable web and mobile apps with expertise in React, Next.js, Flutter, and Firebase.
                        I combine clean, minimal UI design with modular, future-ready architecture to deliver apps that are both elegant and high-performing.
                        With experience mentoring students in web development and UI/UX, I bring clarity, precision, and creativity to every project I take on.</p>
                </div>
                <div style={{ flex: 1 }}>
                    <PlaceholderBox width={150} height={40} shade="#bbb" />
                    <div style={{ display: "flex" }}>
                        <PlaceholderCircle size={50} shade="var(--accent)" />
                        <PlaceholderCircle size={50} shade="var(--accent)" />
                        <PlaceholderCircle size={50} shade="var(--accent)" />
                    </div>
                </div>
            </div>
        </section>
    );
}
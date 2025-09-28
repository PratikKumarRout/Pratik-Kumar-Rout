// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        {/* Intro placeholders */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
          <div>
            <div>
              <div className={styles.heroTitle}><h1>Hi, I&apos;m Pratik</h1></div>
              <div><p>I am a Software developer, builds minimal & future ready apps.</p></div>
              <div>Software Developer</div>
            </div>
          </div>

          <div className="hero-skills">
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
          </div>

          {/* Buttons row */}
          <div className="hero-buttons">
            <PlaceholderBox width="150px" height="45px" shade="#5c74ff" />
            <PlaceholderBox width="150px" height="45px" shade="#5c74ff" />
          </div>
        </div>

      </div>
      <PlaceholderBox width="400px" height="500px" borderRadius={30} />
    </section>
  );
}

// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      <div className={styles.heroContents}>
        <div>
          <div className={styles.heroTitle}><h1>Hi, I&apos;m Pratik</h1></div>
          <div>
            <p style={{fontWeight: "bold", fontSize: "20px", padding: "10px"}}>- a software developer specializing in minimal, scalable web and mobile apps.<br />
              I develop apps using modular architecture & minimal UI.</p>
          </div>
          <p style={{fontWeight: "bold", fontSize: "22px", padding: "10px"}}>&quot;Desing Smart. Build Fast.&quot;</p>
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
      <PlaceholderBox width="400px" height="500px" borderRadius={30} />
    </section>
  );
}

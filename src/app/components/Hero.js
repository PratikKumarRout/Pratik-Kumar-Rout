// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";
import styles from "./Hero.module.css";
import Link from "next/link";

const skills = [
  { label: "React", icon: "⚛️" },        // React atom logo
  { label: "Flutter", icon: "💙" },      // Flutter blue heart (or 🐦 for Dart/Flutter bird)
  { label: "Firebase", icon: "🔥" },     // Firebase flame
  { label: "MySQL", icon: "🐬" },        // Dolphin (MySQL mascot)
  { label: "HTML", icon: "🌐" },         // Globe for web markup
  { label: "CSS", icon: "🎨" },          // Palette for styling
  { label: "JavaScript", icon: "📜" },   // Scroll (JS scripts) or ⚡ for dynamic
];

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContents}>
        <div>
          <div className={styles.heroTitle}><h1>Hi, I&apos;m Pratik</h1></div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.25rem", padding: "10px" }}>
              - a software developer specializing in minimal, scalable web & mobile apps.<br />
              I develop apps using modular architecture & minimal UI.</p>
          </div>
          <p style={{ fontWeight: "bold", fontSize: "1.37rem", padding: "10px" }}>
            &quot;Design Smart. Build Fast.&quot;
          </p>
        </div>

        <div className={styles.skillsContainer}>
          {
            skills.map((skill, index) => (
              <div key={index} className={styles.skillChip}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <span className={styles.skillLabel} >{skill.label}</span>
              </div>
            ))}
        </div>
        <div className={styles.heroButtonContainer}>
          <Link href="#projects" className={styles.heroButton}>
            Projects
          </Link>
          
          <Link href="#contact" className={styles.heroButton}>
            Contact
          </Link>
        </div>
      </div>
      <PlaceholderBox width="400px" height="500px" borderRadius={30} />
    </section>
  );
}

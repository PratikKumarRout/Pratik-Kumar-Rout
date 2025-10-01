// components/Hero.js
import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

const skills = [
  { label: "React", icon: "⚛️" },        // React atom
  { label: "HTML", icon: "🌐" },         // Globe for web markup
  { label: "CSS", icon: "🎨" },          // Palette for styling
  { label: "JavaScript", icon: "📜" },   // Scroll (JS scripts)
  { label: "Java", icon: "☕" },         // Coffee cup
  { label: "Dart", icon: "🎯" },         // Dartboard pun
  { label: "Flutter", icon: "💙" },      // Flutter blue heart
  { label: "Firebase", icon: "🔥" },     // Firebase flame
  { label: "AI Tools", icon: "🤖" },     // Robot face (AI/automation)
  { label: "MySQL", icon: "🐬" },        // Dolphin (MySQL mascot)
  { label: "GitHub", icon: "🐙" },       // Octopus (Octocat nod)
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
          <div className={styles.skillsTrack}>
            {
              [...skills, ...skills].map((skill, index) => (
                <div key={index} className={styles.skillChip}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillLabel} >{skill.label}</span>
                </div>
              ))}
          </div>
          <h3 style={{ marginTop: "1rem", placeSelf: "center"}} >Skills</h3>
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
      <Image
        src="/profileImage.jpg"
        alt="Pratik Kumar Rout"
        className={styles.heroImage}
        width={300}
        height={300}
        priority
      />
    </section>
  );
}

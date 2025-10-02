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
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_contents}>
        <div>
          <div className={styles.hero_title}><h1>Hi, I&apos;m Pratik</h1></div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.25rem", padding: "10px" }}>
              - a software developer specializing in minimal, scalable web & mobile apps.<br />
              I develop apps using modular architecture & minimal UI.</p>
          </div>
          <p style={{ fontWeight: "bold", fontSize: "1.37rem", padding: "10px" }}>
            &quot;Design Smart. Build Fast.&quot;
          </p>
        </div>
        <div className={styles.skills_container}>
          <div className={styles.skills_track}>
            {
              [...skills, ...skills].map((skill, index) => (
                <div key={index} className={styles.skill_chip}>
                  <div className={styles.skill_icon}>{skill.icon}</div>
                  <span className={styles.skill_label} >{skill.label}</span>
                </div>
              ))}
          </div>
          <p style={{ marginTop: "1rem", placeSelf: "center", fontWeight: "bold", fontSize: "1.25rem" }} >Skills</p>
        </div>
        <div className={styles.hero_button_container}>
          <Link href="#projects" rel="noopner noreferrer" className={styles.hero_button}>
            Projects
          </Link>

          <Link href="/certificates/myresume.pdf" target="_blank" rel="noopner noreferrer" className={styles.hero_button}>
            Resume
          </Link>

          <Link href="#contact" rel="noopner noreferrer" className={styles.hero_button}>
            Contact
          </Link>
        </div>
      </div>
      <Image
        src="/profileImage.jpg"
        alt="Pratik Kumar Rout"
        className={styles.hero_image}
        width={300}
        height={300}
        priority
      />
    </section>
  );
}

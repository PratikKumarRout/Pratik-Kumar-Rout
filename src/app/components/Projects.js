// components/Projects.js
import styles from "./projects.module.css";

const projects = [
  { label: "Minimal Clock UI", about: "A Flutter based fullscreen analog clock app with an aesthetics UI design. Functions as a wallpaper clock, combining minimal UI with smooth, modern aesthetics." },
  { label: "Minimal Clock UI", about: "A Flutter based fullscreen analog clock app with an aesthetics UI design. Functions as a wallpaper clock, combining minimal UI with smooth, modern aesthetics." },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.project_section}>
        <h2>Projects</h2>
        <div className={styles.projects_container}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project_chip}>
              <div className={styles.project_image}> </div>
              <div className={styles.project_details}>
                <h3>{project.label}</h3>
                <p>{project.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

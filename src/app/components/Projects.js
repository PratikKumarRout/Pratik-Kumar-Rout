// components/Projects.js
import styles from "./projects.module.css";

const projects = [
  { label: "Neomorphic UI Clock" },
  { label: "Neomorphic UI Clock" },
  { label: "Neomorphic UI Clock" },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.project_section}>
        <h2>Projects</h2>
        <div className={styles.projects_container}>
          {projects.map((project, index) => (
            <div key={index}> {project.label} </div>
          ))}
        </div>
      </div>
    </section>
  );
}

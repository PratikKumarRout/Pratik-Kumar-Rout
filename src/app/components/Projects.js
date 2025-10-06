  // components/Projects.js
  import Link from "next/link";
  import styles from "./projects.module.css";
  import Image from "next/image";

  const projects = [
    {
      label: "Minimal Clock UI",
      url: "https://github.com/PratikKumarRout/neo-clock",
      imgUrl: "/projects/neo.jpg",
      about: "A Flutter based fullscreen analog clock app with an aesthetics UI design. Functions as a wallpaper clock, combining minimal UI with smooth, modern aesthetics."
    },
  ];

  export default function Projects() {
    return (
      <section id="projects" className={styles.proj_section}>
        <div className={styles.project_section}>
          <h2>Projects</h2>
          <div className={styles.projects_container}>
            {projects.map((project, index) => (
              <div key={index} className={styles.project_chip}>
                <Image
                  width={300}
                  height={300}
                  src={project.imgUrl}
                  alt="Project Image"
                  className={styles.project_image}
                />
                <div className={styles.project_details}>
                  <h3>{project.label}</h3>
                  <p>{project.about}</p>
                  <Link href={project.url} rel="noopner noreferrer" className={styles.project_button}>
                    <p>Project Link</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

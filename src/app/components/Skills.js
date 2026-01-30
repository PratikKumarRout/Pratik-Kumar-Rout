import styles from "./Skills.module.css";

const skills = [
    { lable: "Programming Languages", language: "Java, JavaScript" },
    { lable: "Web developement", language: "React, HTML, CSS" },
    { lable: "Database", language: "SQL, Firebase" },
    { lable: "Tools", language: "VS Code, AI tools, Postman" },
    { lable: "Version Control", language: "Git, Git hub" }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skill_section}>
            <h2>Skills</h2>
            <div className={styles.skills_container}>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <p>{skill.lable}: {skill.language}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}
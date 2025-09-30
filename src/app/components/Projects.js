// components/Projects.js
import PlaceholderBox from "./PlaceholderBox";

export default function Projects() {
  return (
    <section id="projects" className="container projects-grid">
      {[1, 2, 3].map(i => (
        <div key={i} style={{ padding: "1rem", backgroundColor: "var(--secondary)", borderRadius: "12px" }}>
          <PlaceholderBox width="100%" height="150px" shade="#999" />
          <PlaceholderBox width="80%" height="20px" shade="#bbb" />
          <PlaceholderBox width="60%" height="15px" shade="var(--accent)" />
        </div>
      ))}
    </section>
  );
}

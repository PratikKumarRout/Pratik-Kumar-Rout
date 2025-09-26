// components/Projects.js
import PlaceholderBox from "./PlaceholderBox";

export default function Projects() {
  return (
    <section className="container projects-grid">
      {[1, 2, 3].map(i => (
        <div key={i} style={{ padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "12px" }}>
          <PlaceholderBox width="100%" height="150px" shade="#999" />
          <PlaceholderBox width="80%" height="20px" shade="#666" />
          <PlaceholderBox width="60%" height="15px" shade="#bbb" />
        </div>
      ))}
    </section>
  );
}

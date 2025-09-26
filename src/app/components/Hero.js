// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function Hero() {
  return (
    <section className="hero">
      {/* Intro placeholders */}
      <div>
        <PlaceholderBox width="300px" height="40px" shade="#333" />
        <PlaceholderBox width="200px" height="20px" shade="#666" />
        <PlaceholderBox width="150px" height="20px" shade="#999" />
      </div>

      {/* Achievements row */}
      <div className="hero-achievements">
        <PlaceholderBox width="200px" height="30px" shade="#444" />
        <PlaceholderBox width="200px" height="30px" shade="#666" />
        <PlaceholderBox width="200px" height="30px" shade="#888" />
      </div>

      {/* Skills row */}
      <div className="hero-skills">
        <PlaceholderCircle size="40px" shade="#999" />
        <PlaceholderCircle size="40px" shade="#777" />
        <PlaceholderCircle size="40px" shade="#555" />
        <PlaceholderCircle size="40px" shade="#333" />
      </div>

      {/* Buttons row */}
      <div className="hero-buttons">
        <PlaceholderBox width="150px" height="45px" shade="#222" />
        <PlaceholderBox width="150px" height="45px" shade="#444" />
      </div>
    </section>
  );
}

// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "space-around",
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        {/* Intro placeholders */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2rem" }}>
          <div>
            <div>
              <PlaceholderBox width="700px" height="70px" shade="#333" />
              <PlaceholderBox width="300px" height="50px" shade="#666" />
              <PlaceholderBox width="200px" height="40px" shade="#999" />
            </div>
          </div>

          <div className="hero-skills">
            <PlaceholderCircle size="80px" shade="#999" />
            <PlaceholderCircle size="80px" shade="#777" />
            <PlaceholderCircle size="80px" shade="#555" />
            <PlaceholderCircle size="80px" shade="#333" />
          </div>

          {/* Buttons row */}
          <div className="hero-buttons">
            <PlaceholderBox width="150px" height="45px" shade="#222" />
            <PlaceholderBox width="150px" height="45px" shade="#444" />
          </div>
        </div>

      </div>
      <PlaceholderBox width="400px" height="500px" borderRadius={30} />
    </section>
  );
}

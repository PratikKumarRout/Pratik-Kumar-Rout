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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
          <div>
            <div>
              <PlaceholderBox width="700px" height="70px" shade="#e0e4ea" />
              <PlaceholderBox width="300px" height="50px" shade="#e0e4ea" />
              <PlaceholderBox width="200px" height="40px" shade="#e0e4ea" />
            </div>
          </div>

          <div className="hero-skills">
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
            <PlaceholderCircle size="80px" shade="#e0e4ea" />
          </div>

          {/* Buttons row */}
          <div className="hero-buttons">
            <PlaceholderBox width="150px" height="45px" shade="#5c74ff" />
            <PlaceholderBox width="150px" height="45px" shade="#5c74ff" />
          </div>
        </div>

      </div>
      <PlaceholderBox width="400px" height="500px" borderRadius={30} />
    </section>
  );
}

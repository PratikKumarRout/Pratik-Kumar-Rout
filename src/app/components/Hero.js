// components/Hero.js
import PlaceholderBox from "./PlaceholderBox";
import PlaceholderCircle from "./PlaceholderCircle";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "space-around"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        {/* Intro placeholders */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
          <div>
            <div>
              <PlaceholderBox width="700px" height="70px" shade="#333" />
              <PlaceholderBox width="300px" height="50px" shade="#666" />
              <PlaceholderBox width="200px" height="40px" shade="#999" />
            </div>

            {/* Achievements row */}
            <div className="hero-achievements">
              <PlaceholderBox width="200px" height="200px" shade="#444" />
              <PlaceholderBox width="200px" height="200px" shade="#666" />
              <PlaceholderBox width="200px" height="200px" shade="#888" />
            </div>

            
          </div>


          {/* Buttons row */}
          <div className="hero-buttons">
            <PlaceholderBox width="150px" height="45px" shade="#222" />
            <PlaceholderBox width="150px" height="45px" shade="#444" />
          </div>
        </div>

      </div>
    <div style={{display: "flex" , flexDirection: "column", justifyContent: "space-evenly"}}>
      <PlaceholderBox width="300px" height="400px" borderRadius={30} />
      {/* Skills row */}
            <div className="hero-skills">
              <PlaceholderCircle size="40px" shade="#999" />
              <PlaceholderCircle size="40px" shade="#777" />
              <PlaceholderCircle size="40px" shade="#555" />
              <PlaceholderCircle size="40px" shade="#333" />
            </div>
      </div>
    </section>
  );
}

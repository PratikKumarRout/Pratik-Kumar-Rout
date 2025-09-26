// pages/index.js

import AboutContact from "./components/AboutContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
      <Hero />
      <Projects />
      <AboutContact />
      </main>
      <Footer />
    </>
  );
}

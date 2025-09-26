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
      <Hero />
      <Projects />
      <AboutContact />
      <Footer />
    </>
  );
}

// pages/index.js

import AboutContact from "./components/AboutContact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
      <Hero />
      <Projects />
      <Skills/>
      <Certificates />
      <AboutContact />
      </main>
      <Footer />
    </>
  );
}

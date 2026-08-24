import { useEffect } from "react";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useSiteMeta } from "./hooks/useSiteMeta";

export default function App() {
  useSmoothScroll();
  useSiteMeta(data.site);

  const theme = data.site.theme;
  const themeStyle = {
    "--accent": theme.accent,
    "--accent-hover": theme.accentHover,
    "--accent-light": theme.accentLight,
    "--surface": theme.surface,
    "--border-light": theme.borderLight,
  };

  return (
    <div style={themeStyle}>
      <Navbar brand={data.hero.name} links={data.nav} />
      <Hero {...data.hero} />
      <main>
        <About {...data.about} />
        <Skills {...data.skills} />
        <Experience {...data.experience} />
        <Projects items={data.projects} />
        <Contact {...data.contact} />
      </main>
      <Footer text={data.footer.text} />
    </div>
  );
}

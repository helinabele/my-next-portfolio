import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects useLayout={false} />
      <Contact />
    </>
  );
}

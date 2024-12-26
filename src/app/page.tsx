import Hero from "./components/Hero";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects useLayout={false} />
        <Contact />
      </main>
    </>
  );
}

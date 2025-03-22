import Hero from "../components/Hero";
import Projects from "../components/projects/page";
import Contact from "../components/contact/page";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects useLayout={false} />
        <Contact />
      </main>
    </>
  );
}

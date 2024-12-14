import Layout from "./components/Layout";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Fraud Report Management"
            description="React-based fraud detection system improving accuracy by 40%"
            imageUrl="/images/fraud/Screenshot(27).png"
            projectUrl="https://example.com/fraud-report"
          />
          <ProjectCard
            title="HR Management System"
            description="Built with Angular, improving engagement by 40%"
            imageUrl="/images/hr-system/hr-system-home.png"
            projectUrl="https://example.com/hr-system"
          />
          <ProjectCard
            title="Cinema System"
            description="Built with Angular, improving engagement by 40%"
            imageUrl="/images/cinema/cinema_home.png"
            projectUrl="https://example.com/cinema-system"
          />
          <ProjectCard
            title="Excel to XML Converter"
            description="Built with React, improving engagement by 40%"
            imageUrl="/images/excel-to-xml/excel-to-xml-home.png"
            projectUrl="https://example.com/excel-to-xml"
          />
        </div>
      </section>
      <Contact />
    </Layout>
  );
}

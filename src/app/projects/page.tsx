"use client";

import { useEffect } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../projects/projectsData";


interface ProjectsProps {
  useLayout?: boolean; // Add a prop to conditionally use Layout
}

export default function Projects({ useLayout = true }: ProjectsProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-fadeIn");
      }, index * 100); // stagger animations
    });
  }, []);
  const content = (
    <section id="projects" className="mt-12 px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
      🚀 My Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  </section>
  );

  // Conditionally wrap in Layout
  return useLayout ? <Layout>{content}</Layout> : content;
}

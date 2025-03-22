"use client";

import { useEffect, useRef } from "react";
import Layout from "../Layout";
import ProjectCard from "../ProjectCard";
import { projectsData } from "./projectsData";
import animations from "../../styles/animations.module.css";
import styles from "../../styles/shared.module.css";

interface ProjectsProps {
  useLayout?: boolean;
}

export default function Projects({ useLayout = true }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".project-card");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add(animations.fadeInUp);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = (
    <section ref={sectionRef} id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>04.</span> Some Things I&apos;ve Built
          </h2>
        </div>
        
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
              style={{ animationDelay: `${index * 0.1}s` }}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );

  return useLayout ? <Layout>{content}</Layout> : content;
}

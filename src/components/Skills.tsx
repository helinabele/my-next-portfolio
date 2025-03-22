"use client";

import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import styles from "../styles/shared.module.css";

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "TailwindCSS", "CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Testing"],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".skill-card");
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

  return (
    <section ref={sectionRef} id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>03.</span> What I Can Do
          </h2>
        </div>
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className={`${animations.fadeInUp}`} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-color)] flex items-center">
                <span className="w-8 h-1 bg-[var(--accent)] mr-3 rounded-full"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="skill-card bg-[var(--card-bg)] border border-[var(--card-border)]
                             text-[var(--text-color)] font-medium py-3 px-4 rounded-md text-center 
                             shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

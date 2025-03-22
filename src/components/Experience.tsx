"use client";

import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import styles from "../styles/shared.module.css";

export default function Experience() {
  const experiences = [
    { role: "Software Engineer", company: "Commercial Bank of Ethiopia", duration: "Aug 2021 - Present", description: "Built scalable web applications with Angular, React & Next.js." },
    { role: "Functional Consultant", company: "CNET Software Technologies", duration: "Feb 2021 - Oct 2021", description: "Deployed ERP Application for more than 10 clients." },
    { role: "Frontend Developer", company: "Zerihun Associated", duration: "Oct 2018 - Feb 2021", description: "Designed responsive UI with Angular and optimized performance." }
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".experience-card");
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
    <section ref={sectionRef} id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>02.</span> Where I&apos;ve Worked
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="experience-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md p-6 hover:shadow-lg 
                       transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-[var(--text-color)]">{exp.role}</h3>
                <p className="text-sm text-[var(--muted)] mt-1 sm:mt-0">{exp.duration}</p>
              </div>
              <p className="text-[var(--accent)] font-mono text-sm mb-3">@ {exp.company}</p>
              <p className="text-[var(--muted)] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

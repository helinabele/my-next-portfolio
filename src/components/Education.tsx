"use client";

import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import styles from "../styles/shared.module.css";

interface Education {
  school: string;
  degree: string;
  duration: string;
  description: string[];
}

export default function Education() {
  const educationData: Education[] = [
    {
      school: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      duration: "2019 - 2023",
      description: [
        "Graduated with First Class Honours",
        "Specialized in Software Engineering and Web Development",
        "Led multiple team projects in web development and software architecture",
        "Participated in coding competitions and hackathons"
      ],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animations.fadeInUp);
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
    <section ref={sectionRef} id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>04.</span> Education
          </h2>
        </div>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-color)]">{edu.school}</h3>
                  <p className="text-[var(--text-secondary)] mt-1">{edu.degree}</p>
                </div>
                <p className="text-[var(--accent)] font-mono mt-2 md:mt-0">{edu.duration}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

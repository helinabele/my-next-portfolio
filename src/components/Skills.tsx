"use client";

import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import styles from "../styles/shared.module.css";
import { motion } from "framer-motion";
import { 
  FaReact, FaAngular, FaNodeJs, FaGitAlt, FaDocker
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiCss3,
  SiExpress, SiMongodb, SiPostgresql, SiAmazon, SiGithubactions
} from "react-icons/si";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "AWS", icon: <SiAmazon />, color: "#232F3E" },
        { name: "CI/CD", icon: <SiGithubactions />, color: "#2088FF" },
      ],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animations.fadeIn);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section ref={sectionRef} id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>03.</span> What I Can Do
          </h2>
        </div>
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.name} 
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-[var(--text-color)] flex items-center">
                <span className="w-8 h-1 bg-[var(--accent)] mr-3 rounded-full"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="skill-card bg-[var(--card-bg)] border border-[var(--card-border)]
                             text-[var(--text-color)] font-medium py-3 px-4 rounded-md
                             shadow-sm hover:shadow-lg transition-all duration-300
                             flex items-center justify-center gap-2"
                  >
                    <span className="text-xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

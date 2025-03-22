"use client";

import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import styles from "../styles/shared.module.css";

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
            <span>05.</span> What&apos;s Next?
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[var(--text-color)] mb-4">Get In Touch</h3>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] 
                     px-8 py-4 rounded-md font-semibold hover:bg-[var(--accent)] hover:bg-opacity-10 
                     transition-all duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
} 
"use client";

import { useEffect, useRef } from "react";
import Layout from "../Layout";
import animations from "../../styles/animations.module.css";
import styles from "../../styles/shared.module.css";
import { contactMethods } from "./contactData";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".contact-card");
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
    <Layout>
      <section ref={sectionRef} id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.numbered} ${animations.fadeInLeft}`}>
              <span>05.</span> What&apos;s Next?
            </h2>
          </div>

          <h3 className="text-4xl font-semibold text-center text-[var(--text-color)] mb-4">
            Get In Touch
          </h3>
          
          <p className="text-[var(--muted)] text-center max-w-lg mx-auto mb-12 text-lg">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className={styles.grid}>
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.link}
                target={method.title === "LinkedIn" ? "_blank" : undefined}
                rel={method.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                className={`${styles.card} contact-card group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-color)] mb-2">
                  {method.title}
                </h3>
                <p className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="mailto:helinabmeaza@gmail.com"
              className="inline-block px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent-transparent)] transition-all duration-300 font-mono text-lg"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

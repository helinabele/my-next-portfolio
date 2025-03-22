"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import Image from "next/image";

export default function Hero() {
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

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.greeting}>Hi, my name is</h1>
            <h2 className={styles.name}>Helina Belete.</h2>
            <h3 className={styles.tagline}>I build exceptional digital experiences.</h3>
            
            <p className={styles.description}>
              I&apos;m a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I&apos;m focused on building accessible, 
              user-centered products using Angular, React and modern web technologies.
            </p>

            <div className={styles.cta}>
              <a 
                href="#projects"
                className={styles.button}
                aria-label="View Projects"
              >
                Check out my work
              </a>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/pic.jpg"
                alt="Helina Belete"
                width={300}
                height={300}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import animations from "../styles/animations.module.css";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

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

    // Add scroll indicator animation
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.classList.add(animations.bounce);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.greeting}>Hi, my name is</h1>
            <h2 className={styles.name}>Helina Belete.</h2>
            <h3 className={styles.tagline}>
              <TypeAnimation
                sequence={[
                  'I build exceptional digital experiences.',
                  2000,
                  'I create beautiful web applications.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[var(--accent)]"
              />
            </h3>
            
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
      
      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
      >
        <FaChevronDown className="text-[var(--accent)] text-2xl animate-bounce" />
      </div>
    </section>
  );
}

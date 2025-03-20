import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <p>
            <span className={styles.waveEmoji} aria-hidden="true">
              👋
            </span>
          </p>

          <h1 className={styles.heading}>
            Hi there, I&apos;m <span className={styles.name}>Helina Belete</span>
          </h1>
          <p className={styles.subtitle}>Software Engineer</p>
          <p className={styles.description}>
            Result-Oriented Software Engineer building and managing web
            applications, user-friendly interfaces, and clean, maintainable
            codebases.
          </p>
          <a
            href="#projects"
            className={styles.button}
            aria-label="View Projects"
          >
            Projects
          </a>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
  <Image
    src="/images/profile-image.png"
    alt="Helina Belete - Profile Picture"
    fill
    style={{ objectFit: "cover" }}
    className={styles.profileImage}
    priority
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"

  />
</div>

      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import "./../globals.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className={`${styles.navbar} shadow-lg`}>
      <nav className={`${styles.container}`}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Link href="#home" aria-label="Home">
            <div className="relative group">
              <Image
                src="/logos/ሕ.png"
                alt="Custom Logo"
                width={50} // Set the width (adjust as needed)
                height={50} // Set the height (adjust as needed)
                className={`${styles.logo} transition-transform duration-300 hover:rotate-180`}
              />
            </div>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Menu */}
          <ul className={`${styles.menu} hidden md:flex`}>
            {["Experience", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={styles.menuItem}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <div className={styles.hamburger}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className={`${styles.mobileMenu}`}>
            {["Experience", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={styles.mobileMenuItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

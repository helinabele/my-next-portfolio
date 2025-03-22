"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import "../styles/globals.css"; 

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Link href="#home" aria-label="Home" className={styles.logoLink}>
            <div className="relative group">
              <Image
                src="/logos/ሕ.png"
                alt="Custom Logo"
                width={40}
                height={40}
                className={`${styles.logo} transition-transform duration-300 group-hover:rotate-180`}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={styles.menuItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className={styles.rightSection}>
            <ThemeToggle />
            <button
              className={styles.mobileToggle}
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={styles.mobileMenuItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

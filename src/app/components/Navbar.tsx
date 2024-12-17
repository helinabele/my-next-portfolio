"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="bg-blue-600 dark:bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="font-poppins text-4xl font-bold text-gray-800 text-2xl font-bold dark:text-white">
            Helina Belete
          </Link>
          <ThemeToggle />
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-4 text-white dark:text-gray-200">
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden text-white dark:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Visibility toggled with `isMobileMenuOpen` */}
        {isMobileMenuOpen && (
          <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

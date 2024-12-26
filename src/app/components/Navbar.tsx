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
          <Link href="#home" className="font-poppins text-4xl font-bold text-gray-800 dark:text-white">
            Helina Belete
          </Link>
          <ThemeToggle />
          <ul className="hidden md:flex gap-4 text-white dark:text-gray-200">
            <li><a href="#experience" className="hover:text-gray-200">Experience</a></li>
            <li><a href="#skill" className="hover:text-gray-200">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
          <button
            className="md:hidden text-white dark:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
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
        {isMobileMenuOpen && (
          <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2">
            <li><a href="#experience" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#skill" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-200 block" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
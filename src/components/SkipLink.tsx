"use client";

import { useState, useEffect } from 'react';

export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className={`fixed top-0 left-0 p-4 bg-[var(--accent)] text-white transform -translate-y-full focus:translate-y-0 transition-transform duration-200 z-50 ${
        isVisible ? 'focus:translate-y-0' : ''
      }`}
      onClick={() => setIsVisible(false)}
    >
      Skip to main content
    </a>
  );
} 
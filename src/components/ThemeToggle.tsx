"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setMounted(true);
  }, []);

  // Apply dark mode when theme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]
                flex items-center justify-center transition-all duration-300
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4 text-[var(--accent)]" />
      ) : (
        <FaSun className="w-4 h-4 text-[var(--accent)]" />
      )}
    </button>
  );
}

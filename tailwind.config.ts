import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // Additional folder for layouts (if applicable)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)", // Add more variables for color flexibility
        muted: "var(--muted)",
      },
      animation: {
        wobble: "wobble 2.5s infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-3px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" }, // Make opacity a string
          "100%": { opacity: "1" }, // Make opacity a string
              },
      },
      backgroundImage: {
        stars: "url('/images/stars-bg.png')", // Starry background
        gradientDark: "linear-gradient(to bottom, #0a192f, #112240)",
        gradientLight: "linear-gradient(to bottom, #e6f1ff, #a8b2d1)",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
        "4xl": "56px",
      },
    },
  },
  darkMode: "class", // Enables dark mode based on a "class"
  plugins: [
    forms, // For styling forms
    typography, // For rich text
    aspectRatio, // For managing aspect ratios
  ],
} satisfies Config;

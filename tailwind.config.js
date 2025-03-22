/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        accent: "#8892B0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};

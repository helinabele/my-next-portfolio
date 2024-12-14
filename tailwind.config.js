/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      primary: "#0A192F",
      secondary: "#64FFDA",
      accent: "#8892B0",
    },
  },
  plugins: [],
};

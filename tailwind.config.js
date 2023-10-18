/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#4B91F1",
        side: "#6ee2f5",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        modak: ["Modak", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};

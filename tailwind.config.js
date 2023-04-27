/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        widerest: "0.2rem",
      },
      spacing: {
        90: "22.5rem",
      },
    },
  },
  plugins: [],
};

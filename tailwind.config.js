/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    fontFamily: {
      serif: ["Georgia", "serif"],
      sans: ["Inter", "sans-serif"],
      body: ["Georgia", "serif"],
      arial: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};

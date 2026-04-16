/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF9E6",
          100: "#FFF0B3",
          200: "#FFE680",
          300: "#FFDB4D",
          400: "#FFD11A",
          500: "#D4A017",
          600: "#B8860B",
          700: "#8B6914",
          800: "#5E4609",
          900: "#312305",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

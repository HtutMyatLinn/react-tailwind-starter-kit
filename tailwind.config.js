/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSansItalicVariable: ["DMSans-italicVariable", "sans-serif"],
        DMSansMedium: ["DMSans-medium", "sans-serif"],
        DMSansMediumItalic: ["DMSans-mediumItalic", "sans-serif"],
        DMSansRegular: ["DMSans-regular", "sans-serif"],
        DMSansVariable: ["DMSans-variable", "sans-serif"],
      },
      colors: {
        purple: {
          100: "hsl(254, 88%, 90%)",
          500: "hsl(256, 67%, 59%)",
        },
        yellow: {
          100: "hsl(31, 66%, 93%)",
          500: "hsl(39, 100%, 71%)",
        },
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: "#app",
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: false,
  theme: {
    screens: {
      xs: "500px",
      sm: defaultTheme.screens.sm,
      md: defaultTheme.screens.md,
      lmd: "875px",
      lg: defaultTheme.screens.lg,
      xl: defaultTheme.screens.xl,
      "2xl": defaultTheme.screens["2xl"],
    },

    extend: {
      colors: {
        primary: "#002147",
        banana: "#fffff5",
        sand: {
          DEFAULT: "#FCFBF8",
          500: "#FCFBF8",
          600: "#F4F1E6",
          700: "#EDE7D4",
          800: "#E5DCC2",
          900: "#DDD2B1",
        },
        bahamaBlue: {
          DEFAULT: "#05708D",
          50: "#07A5CF",
          100: "#079FC8",
          200: "#0793B9",
          300: "#0687AB",
          400: "#067C9C",
          500: "#05708D",
          600: "#045C74",
          700: "#03495C",
          800: "#023543",
          900: "#02222A",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Bitter", "serif"],
        mono: ["Cousine"],
      },
      fontSize: {
        "3.5xl": "2rem",
        "4.5xl": "2.75rem",
      },
      minHeight: {
        "1/4-screen": "25vh",
        "1/3-screen": "33vh",
        "1/2-screen": "50vh",
        "3/4-screen": "75vh",
      },
      maxHeight: {
        "1/4-screen": "25vh",
        "1/3-screen": "33vh",
        "1/2-screen": "50vh",
        "2/3-screen": "66vh",
        "3/4-screen": "75vh",
      },
      inset: {
        "1/10": "10%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

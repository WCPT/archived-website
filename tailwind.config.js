const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "src/pages/**/*.{js,ts,jsx,tsx}",
      "src/components/**/*.{js,ts,jsx,tsx}",
      "src/page-components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "hover:text-blue-800",
      "hover:text-blue-400",
      "hover:text-red-600",
      "hover:text-blue-500",
    ],
  },
  darkMode: false, // or 'media' or 'class'
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
        // "light-gray": "#dee4e7",
        cloud: "#fffff0",
        cyan: colors.cyan,
        sky: colors.sky,
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Bitter", "serif"],
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
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

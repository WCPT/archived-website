module.exports = {
  purge: ["src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#002147",
        "light-gray": "#dee4e7",
      },
      fontFamily: {
        primary: ["Crimson Text", "serif"],
        secondary: ["Work Sans", "sans-serif"],
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
        "3/4-screen": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

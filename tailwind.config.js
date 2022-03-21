const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Trocchi", ...defaultTheme.fontFamily.serif],
        body: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#081f4e",
        secondary: "#0083fd",
        neutral: "#384d70",
      },
    },
  },
  plugins: [],
};

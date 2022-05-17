const defaultTheme = require("tailwindcss/defaultTheme");
// const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens
    },
    extend: {
      fontSize: {
        "11xl": ["14.8rem", { lineHeight: "1.3" }],
        "10xl": "12rem",
        ...defaultTheme.fontSize
      },
      colors:{
        liteblue :"#caf3ff;",
      }
    }
  },
  variants: {},
  plugins: []
};

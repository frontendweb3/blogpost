const defaultTheme = require("tailwindcss/defaultTheme");

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
      backgroundImage: {
        'post': "url('/assets/Images/desert.jpg')"
      }
    }
  },
  variants: {},
  plugins: []
};

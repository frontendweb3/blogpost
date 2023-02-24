const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
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
      }
    }
  },
  variants: {},
  plugins: [ require('@tailwindcss/typography'),require('flowbite-typography'),require('tailwind-scrollbar')]
};

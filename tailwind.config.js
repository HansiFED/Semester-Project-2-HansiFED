/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        inriaserif: ['"Inria Serif"', "serif"],
        inriasans: ['"Inria Sans"', "serif"],
      },
    },
  },
  plugins: [],
};

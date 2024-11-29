/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        inriaserif: ['"Inria Serif"', "serif"],
        inriasans: ['"Inria Sans"', "serif"],
      },
      colors: {
        primaryYellow: "#FFC107", // Yellow from both palettes
        primaryBlue: "#0054B4", // Blue from both palettes

        lightModeBackground: "#FFFFFF",
        lightModeBoxes: "#E6E6E6",
        lightModeDarkGray: "#505050",
        lightModeBlackText: "#000000",
        lightModeWhite: "#FFFFFF",
        lightModeProfileButtons: "#333333",
        lightModeBannerPlaceHolder: "#757575",

        darkModeBackground: "#171717",
        darkModeHeader: "#262626",
        darkModeFooter: "#262626",
        darkModeText: "#000000",
        darkModeBoxes: "#333333",
        darkModeInsideSearchBar: "#413E3E",
      },
    },
  },
  plugins: [],
};

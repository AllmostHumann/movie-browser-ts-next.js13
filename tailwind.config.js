/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      whisper: "#F5F5FA",
      white: "#FFFFFF",
      black: "#000000",
      smoke: "#18181B",
      stormGray: "#74788B",
      mystic: "#E4E6F0",
      silver: "#C4C4C4",
      waterloo: "#7E839A",
      pattensBlue: "#D6E4FF",
      scienceBlue: "#0044CC",
      snuff: "#DDDDEE",
      linkWater: "#D3DEF3",
    },
    gridTemplateColumns: {
      1: "1fr",
      2: "repeat(2, 1fr)",
      3: "repeat(3, 1fr)",
      4: "repeat(4, 1fr)",
    },
    gridTemplateRows: {
      1: "auto, 1fr",
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("@tailwindcss/container-queries"),
];

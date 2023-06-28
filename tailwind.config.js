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
      stormGrey: "#74788B",
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
      5: "minmax(114px, 312px) auto",
      6: "114px auto",
      auto: "auto, 1fr",
    },
    gridTemplateRows: {
      1: "auto, 1fr",
    },
    keyframes: {
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    backgroundImage: {
      "background-pattern-desktop":
        "url('/app/components/MoviePage/Poster/images/backgroundPatternDesktop.svg')",
      "background-pattern-mobile":
        "url('/app/components/MoviePage/Poster/images/backgroundPatternMobile.svg')",
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("@tailwindcss/container-queries"),
];

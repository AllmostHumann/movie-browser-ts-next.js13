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
      "background-gradient-desktop":
        "linear-gradient(270deg,#000000 14.11%,rgba(0, 0, 0, 0.873268) 15.08%,rgba(0, 0, 0, 0.720529) 16.51%,rgba(0, 0, 0, 0.294577) 19.99%,rgba(0, 0, 0, 0.159921) 21.88%,rgba(0, 0, 0, 0) 25.68% ),linear-gradient(90deg,#000000 13.6%,rgba(0, 0, 0, 0.984059) 14.58%,rgba(0, 0, 0, 0.967732) 15.44%,rgba(0, 0, 0, 0.865569) 16.3%,rgba(0, 0, 0, 0.230315) 22.87%,rgba(0, 0, 0, 0) 26.64%),linear-gradient(180deg,#000000 0%,rgba(0, 0, 0, 0.689555) 4.66%,rgba(0, 0, 0, 0.439033) 9.34%,rgba(0, 0, 0, 0.20628) 15.16%,rgba(0, 0, 0, 0) 24.22%),linear-gradient(189.44deg,rgba(0, 0, 0, 0) 58.48%,rgba(0, 0, 0, 0.106473) 63.17%,rgba(0, 0, 0, 0.235359) 68.85%,rgba(0, 0, 0, 0.492821) 78.08%,rgba(0, 0, 0, 0.740286) 85.86%,#000000 92.87%)",

      "background-gradient-mobile":
        "linear-gradient(269.75deg, #000000 8.69%, rgba(0, 0, 0, 0.873268) 10.09%, rgba(0, 0, 0, 0.720529) 12.16%, rgba(0, 0, 0, 0.294577) 17.19%,rgba(0, 0, 0, 0.159921) 19.93%,rgba(0, 0, 0, 0) 25.43%),linear-gradient(90.09deg,#000000 8.05%,rgba(0, 0, 0, 0.984059) 9.4%,rgba(0, 0, 0, 0.967732) 10.59%, rgba(0, 0, 0, 0.865569) 11.79%,rgba(0, 0, 0, 0.230315) 20.89%,rgba(0, 0, 0, 0) 26.12%),linear-gradient(180deg,#000000 -2.7%,rgba(0, 0, 0, 0.689555) 2.36%,rgba(0, 0, 0, 0.439033) 7.46%,rgba(0, 0, 0, 0.20628) 13.79%,rgba(0, 0, 0, 0) 23.65%),linear-gradient(192.09deg,rgba(0, 0, 0, 0) 65%,rgba(0, 0, 0, 0.106473) 69.25%,rgba(0, 0, 0, 0.235359) 74.4%,rgba(0, 0, 0, 0.492821) 82.77%,rgba(0, 0, 0, 0.740286) 89.82%,#000000 96.18%)",
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("@tailwindcss/container-queries"),
];

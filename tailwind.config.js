/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      screens: {
        'mobileMax': {'max': '767px'},
      },
      colors: {
        'whisper': '#F5F5FA',
        'white': '#FFFFFF',
        'black': '#000000',
        'smoke': '#18181B',
        'stormGray': '#74788B',
        'mystic': '#E4E6F0',
        'silver': '#C4C4C4',
        'waterloo': '#7E839A',
        'pattensBlue': '#D6E4FF',
        'scienceBlue': '#0044CC',
        'snuff': '#DDDDEE',
        'linkWater': '#D3DEF3',
      },
      gridTemplateColumns: {

      }
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
